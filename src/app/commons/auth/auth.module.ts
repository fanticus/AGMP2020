import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { UserStoreModule } from './user-store/user-store.module';

import { AuthGuard } from './guards/auth/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        UserStoreModule,
    ],
    providers: [ AuthGuard ]
})
export class AuthModule { }
