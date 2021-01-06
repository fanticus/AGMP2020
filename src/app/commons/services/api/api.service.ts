import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, filter } from 'rxjs/operators';

import { SettingsService } from '../settings/settings.service';

@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient,
        private settingsSrv: SettingsService,
    ) { }

    public request( method: string = 'get', property: string, data?: any ): Observable<any> {
        return this.settingsSrv.isExistsSettings$().pipe(
            filter( isExistsSettings => !!isExistsSettings ),
            switchMap( () => {
                const url: string = this.settingsSrv.getUrl( property );
                return this.http[ method ]( url, data );
            }),
            catchError( ( errorResponse: HttpErrorResponse ) => {
                return throwError( errorResponse );
            }),
        );
    }
}
