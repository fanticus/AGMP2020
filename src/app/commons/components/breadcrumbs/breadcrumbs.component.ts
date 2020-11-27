import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import {
    filter,
    distinctUntilChanged,
    takeUntil
} from 'rxjs/operators';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

    public breadcrumbs: string[] = [];

    private textBreadcrumbs: { [ key: string ]: string } = {
        courses: 'courses',
        new: 'new course',
        edit: 'edit course'
    };

    private unsubscribe$ = new Subject<void>();

    constructor(
        private router: Router,
      ) {
    }

    ngOnInit() {
        this.breadcrumbs = [ this.router.url.replace( '/', '' ) ];
        this.subscribeToEvent();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public getText( value: string ): string {
        if ( this.textBreadcrumbs.hasOwnProperty( value ) ) {
            return this.textBreadcrumbs[ value ];
        }
        return this.textBreadcrumbs[ 'edit' ];
    }

    private getBreadCrumb( route: NavigationEnd ): string[] {
        const url = route.url;
        const newBreadcrumbs: string[] = url.includes( '/' )
            ? url.split( '/' ).slice( 1 )
            : [ url ];
        return newBreadcrumbs;
    }

    private subscribeToEvent(): void {
        this.router.events.pipe(
                filter( event => event instanceof NavigationEnd ),
                distinctUntilChanged(),
                takeUntil( this.unsubscribe$ )
            ).subscribe( ( event: NavigationEnd ) => {
                this.breadcrumbs = this.getBreadCrumb( event );
            });
    }
}
