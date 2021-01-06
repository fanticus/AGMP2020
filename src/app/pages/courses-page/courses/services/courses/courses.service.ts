import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../../../root-store/app.state';
import { ICourse } from '../../interfaces/CourseInterface';

import {
    GetCourses,
    GetSortCourses,
    ChangeIsFinalCourses,
    GetCourse,
    CreateCourse,
    UpdateCourse,
    RemoveCourse,
    GetAuthors,
    GetSortAuthors,
} from '../../courses-store/courses.actions';

@Injectable()
export class CoursesService {

    public courseList$ = new Subject<ICourse[]>();

    constructor(
        private store: Store<IAppState>
    ) { }

    public load( count?: number ): void {
        this.store.dispatch( GetCourses({ count }) );
    }

    public loadSort( value: string, count?: number ): void {
        this.store.dispatch( GetSortCourses({ value, count }) );
    }

    public createItem( course: ICourse ): void {
        this.store.dispatch( CreateCourse({ course }) );
    }

    public removeItem( id: number ): void {
        this.store.dispatch( RemoveCourse({ id }) );
    }

    public updateItem( course: ICourse ): void {
        this.store.dispatch( UpdateCourse({ course }) );
    }

    public getItemById( id: number ): void {
        this.store.dispatch( GetCourse({ id }) );
    }

    public changeLoadMore( value: any = {} ): void {
        this.store.dispatch( ChangeIsFinalCourses( value ) );
    }

    public loadAuthors(): void {
        this.store.dispatch( GetAuthors() );
    }

    public loadSortAuthors( value: string ): void {
        this.store.dispatch( GetSortAuthors({ value }) );
    }
}
