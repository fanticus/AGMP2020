import { Component } from '@angular/core';

import { AuthService } from '../../../../commons/services/auth/auth.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    constructor(
        public authSrv: AuthService
    ) { }
}
