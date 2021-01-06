import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationService } from '../../services/form-validation/form-validation.service';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {

    @Input()
    public form: FormGroup;

    constructor(
        public formValidationSrv: FormValidationService
    ) {}
}
