import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserEffects } from './user.effects';
import { userReducer } from './user.reducer';
import { userStateKey } from './user.selectors';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature( userStateKey, userReducer ),
        EffectsModule.forFeature([ UserEffects ]),
    ],
    providers: [ UserEffects ]
})
export class UserStoreModule { }
