import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import {
  IAuthorCourse
} from '../../../../pages/courses-page/courses/interfaces/CourseInterface';

import { AbstractFieldComponent } from '../abstract-field.component';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AuthorsFieldComponent),
            multi: true
        }
    ]
})
export class AuthorsFieldComponent extends AbstractFieldComponent {

    constructor() {
        super();
    }

    public deleteAuthor( author: IAuthorCourse ): void {
        const newList = this.control.value
            .filter( authorItem => authorItem.id !== author.id );
        this.control.patchValue( newList.length ? newList : null );
    }

    public addAuthor( author: IAuthorCourse ): void {
        const newList = this.control.value
            ? [ ...this.control.value, author ]
            : [ author ];
        this.control.patchValue( newList );
    }

    public changeTouch(): void {
        if ( this.control.untouched ) {
            this.control.markAsTouched();
        }
    }
}
