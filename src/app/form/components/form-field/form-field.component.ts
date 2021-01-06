import { Component, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractFieldComponent } from '../fields/abstract-field.component';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormFieldComponent),
            multi: true
        }
    ]
})
export class FormFieldComponent extends AbstractFieldComponent {

    @Input()
    public control: FormControl;
    @Input()
    public title: string;

    constructor() {
        super();
    }
}
