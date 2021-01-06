import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// SERVICES
import { AuthService } from './services/auth/auth.service';
import { AuthApiService } from './services/auth-api/auth-api.service';
import { AuthUtilitiesService } from './services/auth-utilities/auth-utilities.service';

// GUARDS
import { AuthGuard } from './guards/auth/auth.guard';

// MODULES
import { UserStoreModule } from './user-store/user-store.module';

@NgModule({
    imports: [
        CommonModule,
        UserStoreModule,
        RouterModule,
    ],
    providers: [
        AuthGuard,
        AuthService,
        AuthApiService,
        AuthUtilitiesService,
    ]
})
export class AuthModule { }
