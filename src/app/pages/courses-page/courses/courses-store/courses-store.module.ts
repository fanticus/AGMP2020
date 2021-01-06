import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoursesEffects } from './courses.effects';
import { coursesReducer } from './courses.reducer';
import { coursesStateKey } from './courses.selectors';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature( coursesStateKey, coursesReducer ),
        EffectsModule.forFeature([ CoursesEffects ]),
    ],
    providers: [ CoursesEffects ]
})
export class CoursesStoreModule { }
