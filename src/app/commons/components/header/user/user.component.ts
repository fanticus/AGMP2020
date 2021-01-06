import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, filter, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { getUser } from '../../../../auth/user-store/user.selectors';
import { IAppState } from '../../../../root-store/app.state';

import { ModalTypes } from '../../../../modals/interfaces/ModalInterface';

import { ModalsService } from '../../../../modals/services/modals/modals.service';
import { AuthService } from '../../../../auth/services/auth/auth.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

    public username$: Observable<string>;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private authSrv: AuthService,
        private modalsSrv: ModalsService,
        private store: Store<IAppState>
    ) { }

    ngOnInit() {
        this.username$ = this.store.pipe(
            filter( res => !!Object.keys( res ).length ),
            select( getUser ),
            filter( user => !!user ),
            map( user => `${ user.firstName } ${ user.lastName }` ),
            takeUntil( this.unsubscribe$ )
        );
        this.authSrv.userInfo();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public logoutUser(): void {
      this.modalsSrv.showModal( ModalTypes.Confirm, {
              title: 'Logout?',
              description: 'Are you sure you want to log-off?',
              button: {
                  ok: 'Yes, logout'
              }
          }).pipe( takeUntil( this.unsubscribe$ ) )
          .subscribe( result => {
              if ( result.status ) {
                  this.authSrv.logout();
              }
          });
    }
}
