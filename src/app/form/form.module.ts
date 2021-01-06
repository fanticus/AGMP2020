import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { FormFieldComponent } from './components/form/form-field/form-field.component';
import { FormComponent } from './components/form/form.component';

const COMPONENTS = [
    FormComponent,
    FormFieldComponent,
];

@NgModule({
    declarations: [
        ...COMPONENTS,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [ ...COMPONENTS ]
})
export class FormModule { }
