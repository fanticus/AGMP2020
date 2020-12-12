import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, pluck, takeUntil } from 'rxjs/operators';

import { ModalTypes } from '../../../../modals/interfaces/ModalInterface';

import { ModalsService } from '../../../../modals/services/modals/modals.service';
import { AuthService } from '../../../auth/services/auth/auth.service';

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
        private modalsSrv: ModalsService
    ) { }

    ngOnInit() {
        this.username$ = this.authSrv.userInfo().pipe(
            pluck( 'name' ),
            map( name => `${ name.first } ${ name.last }` )
        );
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
