import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {
    filter,
    distinctUntilChanged,
    takeUntil,
    pluck
} from 'rxjs/operators';

import { CoursesService } from '../../../pages/courses-page/services/courses/courses.service';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

    public breadcrumbs: string[] = [];

    public courseTitle$: Observable<string>;

    private textBreadcrumbs: { [ key: string ]: string } = {
        courses: 'courses',
        new: 'new course',
    };

    private unsubscribe$ = new Subject<void>();

    constructor(
        public coursesSrv: CoursesService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.breadcrumbs = this.getBreadCrumb( this.router.url );
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
        return null;
    }

    private getBreadCrumb( url: string ): string[] {
        if ( url && url !== '/' ) {
            const urls = url.split( '/' ).slice( 1 );
            this.getTitleCourse( urls[1] );
            return urls;
        }
        return [ 'courses' ];
    }

    private getTitleCourse( idCourse: string ): void {
        if ( idCourse && !this.textBreadcrumbs
            .hasOwnProperty( idCourse ) ) {
            this.courseTitle$ = this.coursesSrv.getItemById( +idCourse )
                .pipe( pluck( 'title' ) );
        }
    }

    private subscribeToEvent(): void {
        this.router.events.pipe(
                filter( event => event instanceof NavigationEnd ),
                distinctUntilChanged(),
                takeUntil( this.unsubscribe$ )
            ).subscribe( ( event: NavigationEnd ) => {
                this.breadcrumbs = this.getBreadCrumb( event.url );
            });
    }
}
