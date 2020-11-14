import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICourse } from '../../../../commons/interfaces/ApiDataInterface';

import { coursesDataStub } from '../../../../../assets/dev-stubs/coursesData';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    private courseList: ICourse[];

    constructor() { }

    public getCourses(): Observable<ICourse[]> {
        if ( !this.courseList ) {
          this.courseList = coursesDataStub;
        }
        return of( this.courseList );
    }

    public createCourse(): void {
        console.log('createCourse');
    }

    public getCourseById( id: string ): ICourse {
        return this.courseList.find( obj => obj.id === id );
    }

    public updateCourse(): void {
        console.log('updateCourse');
    }

    public removeCourse( courseId: string ): void {
        this.courseList = this.courseList
            .filter( course => course.id !== courseId );
    }
}
