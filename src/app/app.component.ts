import { Component } from '@angular/core';

import { AuthService } from './commons/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        public authSrv: AuthService
    ) {}
}
