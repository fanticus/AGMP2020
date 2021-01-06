import { Injectable } from '@angular/core';

import { IUser } from '../../interfaces/AuthInterface';
import { IApiUser } from '../../interfaces/ApiAuthInterface';

@Injectable()
export class AuthUtilitiesService {

    constructor() { }

    public convertUserData( user: IApiUser ): IUser {
        return {
            id: user.id,
            firstName: user.name.first,
            lastName: user.name.last,
        };
    }
}
