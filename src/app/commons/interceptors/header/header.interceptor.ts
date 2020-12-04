import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor(
        private authSrv: AuthService
    ) { }

    public intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const newHeaders = {};
        const token = this.authSrv.token;
        if ( request.body && !request.headers.get( 'Content-Type' ) ) {
            newHeaders[ 'Content-Type' ] = 'application/json';
        }
        if ( token && !request.headers.get( 'Authorization' ) ) {
            newHeaders[ 'Authorization' ] = token;
        }
        if ( Object.keys( newHeaders ).length ) {
            request = request.clone({
                setHeaders: newHeaders
            });
            return next.handle( request );
        }
    }
}
