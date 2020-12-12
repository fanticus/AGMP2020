import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { AppEventsService } from '../../services/app-events/app-events.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    public currentRequestsNumber: number = 0;

    constructor(
        private eventsSrv: AppEventsService
    ) { }

    public intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        this.addRequest();
        return next.handle( request ).pipe(
            tap(
                ( response: HttpEvent<any> ) => {
                    if ( response instanceof HttpResponse ) {
                        this.removeRequest();
                    }
                },
                ( errorResponse: HttpErrorResponse ) => {
                    this.removeRequest();
                }
            ),
            finalize( () => {
                this.completeRequests();
            })
        );
    }

    private addRequest(): void {
        if ( this.currentRequestsNumber === 0 ) {
            this.eventsSrv.httpRequestEvent$.next( true );
        }
        this.currentRequestsNumber = ++this.currentRequestsNumber;
    }

    private removeRequest(): void {
        this.currentRequestsNumber = this.currentRequestsNumber === 0
            ? this.currentRequestsNumber
            : --this.currentRequestsNumber;
    }

    private completeRequests(): void {
        if ( this.currentRequestsNumber === 0 ) {
            this.eventsSrv.httpRequestEvent$.next( false );
        }
    }
}
