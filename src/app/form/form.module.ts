import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { FormComponent } from './components/form/form.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { InputFieldComponent } from './components/fields/input-field/input-field.component';
import { TextareaFieldComponent } from './components/fields/textarea-field/textarea-field.component';
import { DateFieldComponent } from './components/fields/date-field/date-field.component';
import { TimeFieldComponent } from './components/fields/time-field/time-field.component';
import { AuthorsFieldComponent } from './components/fields/authors-field/authors-field.component';

// SERVICES
import { FormValidationService } from './services/form-validation/form-validation.service';

// MODULES
import { CommonsModule } from '../commons/commons.module';

const COMPONENTS = [
    FormComponent,
    FormErrorComponent,
    InputFieldComponent,
    TextareaFieldComponent,
    DateFieldComponent,
    TimeFieldComponent,
    AuthorsFieldComponent,
];

const MODULES = [
    FormsModule,
    ReactiveFormsModule,
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        FormFieldComponent,
    ],
    imports: [
        CommonModule,
        ...MODULES,
        CommonsModule
    ],
    providers: [
        FormValidationService
    ],
    exports: [
        ...COMPONENTS,
        ...MODULES,
    ]
})
export class FormModule { }
