import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { AuthGuard } from './guards/auth/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    providers: [ AuthGuard ]
})
export class AuthModule { }
