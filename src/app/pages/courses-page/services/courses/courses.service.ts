import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICourse } from '../../../../commons/interfaces/CourseInterface';
import { IApiCourse } from '../../../../commons/interfaces/ApiCourseInterface';

import { UtilitiesService } from '../../../../commons/services/utilities/utilities.service';
import { CoursesApiService } from '../courses-api/courses-api.service';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    public courseList$ = new Subject<ICourse[]>();

    constructor(
        private coursesApiSrv: CoursesApiService,
        private utilitiesSrv: UtilitiesService,
        private router: Router,
    ) { }

    public load( count?: number ): void {
        this.coursesApiSrv.load( count )
            .pipe(
                map( ( res: IApiCourse[] ) => {
                    return res.map( course => this.utilitiesSrv
                        .convertCourseData( course ) );
                })
            ).subscribe( courses => {
                this.courseList$.next( courses );
            });
    }

    public loadSort( value: string, count?: number ): void {
        this.coursesApiSrv.loadSort( value, count )
            .pipe(
                map( ( res: IApiCourse[] ) => {
                    return res.map( course => this.utilitiesSrv
                        .convertCourseData( course ) );
                })
            ).subscribe( courses => {
                this.courseList$.next( courses );
            });
    }

    public create( course: ICourse ): void {
        const courseData = this.utilitiesSrv.convertCourse( course );
        this.coursesApiSrv.create( courseData )
            .subscribe( () => {
                this.router.navigate([ '/courses' ]);
            });
    }

    public removeItem( courseId: number ): void {
        this.coursesApiSrv.removeItem( courseId )
            .subscribe( () => {} );
    }

    public updateItem( course: ICourse ): void {
        const courseData = this.utilitiesSrv.convertCourse( course );
        this.coursesApiSrv.updateItem( courseData )
            .subscribe( () => {
                this.router.navigate([ '/courses' ]);
            } );
    }

    public getItemById( id: number ): Observable<ICourse> {
        return this.coursesApiSrv.getItemById( id ).pipe(
            map( ( res: IApiCourse ) => {
                return this.utilitiesSrv.convertCourseData( res );
            }));
    }
}
