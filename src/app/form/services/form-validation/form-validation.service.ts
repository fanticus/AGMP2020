import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class FormValidationService {

    private errorsTexts: any = {
        required: 'Поля должны быть заполнены',
        min: 'Значение поля меньше минимального',
        maxlength: 'Длина поля больше максимального',
        minlength: 'Длина поля меньше минимального',
        pattern: 'Значение не является датой'
    };

    constructor() { }

    public getError( fields: FormControl[] ): string | null {
        const field = Object.values( fields )
            .find( control => {
                return control.errors && control.invalid
                    && control.touched;
            });
        if ( !field ) {
            return null;
        }
        const keys: string[] = Object.keys( field.errors );
        return keys.length
            ? keys[ 0 ]
            : null;
    }

    public getTextError( error: string ): string | null {
        return error && error in this.errorsTexts
            ? this.errorsTexts[ error ]
            : null;
    }
}
