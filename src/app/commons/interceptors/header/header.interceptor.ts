import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor() { }

    public intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const newHeaders = {};
        if ( request.body && !request.headers.get( 'Content-Type' ) ) {
            newHeaders[ 'Content-Type' ] = 'application/json';
        }
        if ( Object.keys( newHeaders ).length ) {
            request = request.clone({
                setHeaders: newHeaders
            });
        }
        return next.handle( request );
    }
}
