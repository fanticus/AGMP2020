import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractFieldComponent } from '../abstract-field.component';

@Component({
    selector: 'app-time-field',
    templateUrl: './time-field.component.html',
    styleUrls: ['./time-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimeFieldComponent),
            multi: true
        }
    ]
})
export class TimeFieldComponent extends AbstractFieldComponent {}
