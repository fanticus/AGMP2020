import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractFieldComponent } from '../abstract-field.component';

@Component({
    selector: 'app-textarea-field',
    templateUrl: './textarea-field.component.html',
    styleUrls: ['./textarea-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaFieldComponent),
            multi: true
        }
    ]
})
export class TextareaFieldComponent extends AbstractFieldComponent {}
