import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService } from './../../services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authSrv: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.descriptionPage( state.url );
    }

    private descriptionPage( currentUrl: string ): Observable<boolean> {
        return this.authSrv.isAuthenticated$.pipe(
            switchMap( isAuth => {
                const isLoginPage = currentUrl.includes( 'login' );
                if ( isAuth && isLoginPage ) {
                    return this.router.navigate( [ 'courses' ] );
                }
                if ( isLoginPage ) {
                    return of( true );
                }
                if ( !isAuth ) {
                    return this.router.navigate( [ 'login' ] );
                }
                return of( isAuth );
            }));
    }
}
