import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';

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
    ): Observable<boolean> | boolean {
        return this.descriptionPage( state.url );
    }

    private descriptionPage( currentUrl ): boolean {
        const isAuth = this.authSrv.isAuthenticated;
        const isLoginPage = currentUrl.includes( 'login' );
        if ( isAuth && isLoginPage ) {
            this.router.navigate( [ 'courses' ] );
        }
        if ( isLoginPage ) {
            return true;
        }
        if ( !isAuth ) {
            this.router.navigate( [ 'login' ] );
        }
        return isAuth;
    }
}
