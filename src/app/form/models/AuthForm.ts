import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

export class AuthForm {

    static createFormObject() {
        return new FormGroup({
            login: new FormControl('', [
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(5)
            ])
        });
    }
}
