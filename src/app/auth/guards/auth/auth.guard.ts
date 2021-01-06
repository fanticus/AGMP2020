import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Route,
    Router,
    CanLoad,
    CanActivateChild,
    UrlSegment,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

    constructor(
        private authSrv: AuthService,
        private router: Router
    ) {}

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.descriptionPage( route.path );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.descriptionPage( state.url );
    }

    canActivateChild(
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
