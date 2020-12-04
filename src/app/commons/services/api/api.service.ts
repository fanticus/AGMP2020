import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { SettingsService } from './../settings/settings.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient,
        private settingsSrv: SettingsService,
    ) { }

    public request( method: string, property: string, data?: any ): Observable<any> {
        return this.settingsSrv.getSettings$().pipe(
            switchMap( ( settings: any ) => {
                const url: string = this.settingsSrv.getUrl( property, settings );
                return this.http[ method ]( url, data );
            }),
            catchError( ( errorResponse: HttpErrorResponse ) => {
                return throwError( errorResponse );
            }),
        );
    }
}
