import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IApiUser, IApiLogin, IApiToken } from '../../interfaces/ApiAuthInterface';
import { UrlsSettingsTypes } from '../../../commons/interfaces/SettingsInterface';

import { ApiService } from '../../../commons/services/api/api.service';

@Injectable()
export class AuthApiService {

    constructor(
        private apiSrv: ApiService,
    ) { }

    public login( authData: IApiLogin ): Observable<IApiUser> {
        const url = `${ UrlsSettingsTypes.Api }/${ UrlsSettingsTypes.Login }`;
        return this.apiSrv.request( 'post', url, authData ).pipe(
                switchMap( ( res: IApiToken ) => {
                    return this.userInfo( res.token );
                })
            );
    }

    public userInfo( token: string ): Observable<IApiUser> {
        const url = `${ UrlsSettingsTypes.Api }/${ UrlsSettingsTypes.UserInfo }`;
        const params = { token };
        return this.apiSrv.request('post', url, params );
    }
}
