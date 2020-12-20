import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment.prod';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            name: 'AGMP2020',
            maxAge: 25,
            logOnly: environment.production
        }),
    ],
})
export class RootStoreModule { }
