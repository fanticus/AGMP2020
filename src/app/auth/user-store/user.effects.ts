import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import {
    map,
    tap,
    catchError,
    switchMap,
    mergeMap,
    takeUntil,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
    LoginUser,
    LoginUserSuccess,
    LoginUserFail,
    UserInfoSuccess,
    UserInfoFail,
    UserInfo,
    LogoutUser,
} from './user.actions';

import { AuthService } from '../services/auth/auth.service';
import { AuthApiService } from '../services/auth-api/auth-api.service';
import { AuthUtilitiesService } from '../services/auth-utilities/auth-utilities.service';

@Injectable()
export class UserEffects {

    private unsubscribe$ = new Subject<void>();

    constructor(
        private actions$: Actions,
        private router: Router,
        private authSrv: AuthService,
        private authApiSrv: AuthApiService,
        private authUtilitSrv: AuthUtilitiesService,
    ) {}

    loginUser$ = createEffect(() => this.actions$.pipe(
        ofType( LoginUser ),
        map( action => action.authData ),
        mergeMap( loginForm =>
            this.authApiSrv.login( loginForm ).pipe(
                tap( user => {
                    localStorage.setItem( 'token', user.fakeToken );
                }),
                map( user => {
                    return this.authUtilitSrv.convertUserData( user );
                }),
                map( user => LoginUserSuccess({ user }) ),
                tap( () => {
                    this.authSrv.isAuthenticated$.next( true );
                    this.router.navigate( [ 'courses' ] );
                }),
                catchError(() => of( LoginUserFail() ))
            )
        )
    ));

    logoutUser$ = createEffect(() => this.actions$.pipe(
        ofType( LogoutUser ),
        tap( () => {
            localStorage.removeItem( 'token' );
            this.authSrv.isAuthenticated$.next( false );
            this.router.navigate( [ 'login' ] );
        }),
        takeUntil( this.unsubscribe$ )
    ), { dispatch: false });

    userInfo$ = createEffect(() => this.actions$.pipe(
        ofType( UserInfo ),
        map( action => action.tokenData.token ),
        mergeMap( token =>
            this.authApiSrv.userInfo( token ).pipe(
                map( user => {
                    return this.authUtilitSrv.convertUserData( user );
                }),
                map( user => UserInfoSuccess({ user }) ),
                catchError(() => of( UserInfoFail() ))
            )
        )
    ));
}
