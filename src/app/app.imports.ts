import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app-routing.module';

export const APP_IMPORTS = [
    RouterTestingModule.withRoutes(ROUTES),
    FormsModule,
];
