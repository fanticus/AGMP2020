import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IApiUser, IApiLogin, IApiToken } from '../../interfaces/ApiAuthInterface';

import { ApiService } from '../../../services/api/api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthApiService {

    constructor(
        private apiSrv: ApiService,
    ) { }

    public login( authData: IApiLogin ): Observable<IApiUser> {
        return this.apiSrv.request( 'post', 'login', authData ).pipe(
                switchMap( ( res: IApiToken ) => {
                    return this.userInfo( res.token );
                })
            );
    }

    public userInfo( token: string ): Observable<IApiUser> {
        const params = { token };
        return this.apiSrv.request('post', 'userInfo', params );
    }
}
