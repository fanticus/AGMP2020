import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICourse } from '../../../../commons/interfaces/ApiDataInterface';

import { coursesDataStub } from '../../../../../assets/dev-stubs/coursesData';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    private courseList: ICourse[] = [];

    constructor() { }

    public getCourses(): Observable<ICourse[]> {
        if ( !this.courseList.length ) {
          this.courseList = coursesDataStub;
        }
        return of( this.courseList );
    }

    public createCourse( course: ICourse ): void {
        const id = this.getIdCourse();
        this.courseList = [
            { ...course, id },
            ...this.courseList
        ];
    }

    public getCourseById( id: string ): ICourse {
        const course = this.courseList.find( obj => obj.id === id );
        return course ? { ...course } : null;
    }

    public updateCourse( course: ICourse ): void {
        this.courseList = this.courseList.map( courseItem => {
            return courseItem.id === course.id
                ? course
                : courseItem;
        });
    }

    public removeCourse( courseId: string ): void {
        this.courseList = this.courseList
            .filter( course => course.id !== courseId );
    }

    private getIdCourse(): string {
        const value = Math.random() * 10;
        const newId = Math.floor( Math.random() * value + value );
        const isExistsValue = !!this.courseList.find( ( course: ICourse ) => {
            return +course.id === newId;
        });
        return isExistsValue
            ? this.getIdCourse()
            : newId.toString();
    }
}
