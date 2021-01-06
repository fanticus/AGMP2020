import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        public authSrv: AuthService,
        public router: Router
    ) {}
}
