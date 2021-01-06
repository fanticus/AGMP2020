import { formatDate } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class CourseForm {

    static createFormObject() {
        return new FormGroup({
            id: new FormControl(''),
            title: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            description: new FormControl('', [
                Validators.required,
                Validators.maxLength(500)
            ]),
            duration: new FormControl('', [
                Validators.required,
                Validators.min(0)
            ]),
            creationDate: new FormControl(
                formatDate(new Date().toDateString(), 'MM/dd/yyyy', 'en-US' ), [
                Validators.required
            ]),
            authors: new FormControl('', [
                Validators.required,
            ]),
            topRated: new FormControl(false)
        });
    }
}
