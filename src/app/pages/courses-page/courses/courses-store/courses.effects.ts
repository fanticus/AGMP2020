import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
    map,
    tap,
    catchError,
    mergeMap,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
    GetCourses,
    GetCoursesSuccess,
    GetCoursesFail,
    GetSortCourses,
    GetSortCoursesSuccess,
    GetSortCoursesFail,
    ChangeIsFinalCourses,
    SetIsFinalCourses,
    GetCourse,
    GetCourseSuccess,
    GetCourseFail,
    UpdateCourse,
    UpdateCourseSuccess,
    UpdateCourseFail,
    CreateCourse,
    CreateCourseSuccess,
    CreateCourseFail,
    RemoveCourse,
    RemoveCourseSuccess,
    RemoveCourseFail,
    GetAuthors,
    GetAuthorsSuccess,
    GetAuthorsFail,
    GetSortAuthors,
    GetSortAuthorsSuccess,
    GetSortAuthorsFail,
} from './courses.actions';

import { CoursesApiService } from '../services/courses-api/courses-api.service';
import { CoursesUtilitiesService } from '../services/courses-utilities/courses-utilities.service';

@Injectable()
export class CoursesEffects {

    constructor(
        private actions$: Actions,
        private coursesApiSrv: CoursesApiService,
        private coursesUtilitSrv: CoursesUtilitiesService,
        private router: Router
    ) {}

    getCourses$ = createEffect(() => this.actions$.pipe(
        ofType( GetCourses ),
        map( action => action.count ),
        mergeMap( count =>
            this.coursesApiSrv.load( count ).pipe(
                map( courses => {
                    return courses.map( course => {
                        return this.coursesUtilitSrv.convertCourseData( course );
                    });
                }),
                map( courses => GetCoursesSuccess({ courses }) ),
                catchError(() => of( GetCoursesFail() ))
            )
        )
    ));

    getSortCourses$ = createEffect(() => this.actions$.pipe(
        ofType( GetSortCourses ),
        mergeMap( ({ value, count }) =>
            this.coursesApiSrv.loadSort( value, count ).pipe(
                map( courses => {
                    return courses.map( course => {
                        return this.coursesUtilitSrv.convertCourseData( course );
                    });
                }),
                map( courses => GetSortCoursesSuccess({ courses }) ),
                catchError(() => of( GetSortCoursesFail() ))
            )
        )
    ));

    changeIsFinalCourses$ = createEffect(() => this.actions$.pipe(
        ofType( ChangeIsFinalCourses ),
        map( ({ newCoursesLength, oldCoursesLength }) => {
            return newCoursesLength && oldCoursesLength
                ? oldCoursesLength !== newCoursesLength
                    && oldCoursesLength < newCoursesLength
                : true;
        }),
        map( ( isFinalCourses: boolean ) => SetIsFinalCourses({
            isFinalCourses
        }))
    ));

    getCourse$ = createEffect(() => this.actions$.pipe(
        ofType( GetCourse ),
        mergeMap( ({ id }) =>
            this.coursesApiSrv.getItemById( id ).pipe(
                map( course => {
                    return this.coursesUtilitSrv.convertCourseData( course );
                }),
                map( course => GetCourseSuccess({ course }) ),
                catchError(() => {
                    this.router.navigate([ '404' ]);
                    return of( GetCourseFail() );
                })
            )
        )
    ));

    createCourse$ = createEffect(() => this.actions$.pipe(
        ofType( CreateCourse ),
        map( ({ course }) => this.coursesUtilitSrv.convertCourse( course ) ),
        mergeMap( courseItem =>
            this.coursesApiSrv.createItem( courseItem ).pipe(
                map( () => CreateCourseSuccess() ),
                tap( () => {
                    this.router.navigate([ 'courses' ]);
                }),
                catchError(() => of( CreateCourseFail() ))
            )
        )
    ));

    updateCourse$ = createEffect(() => this.actions$.pipe(
        ofType( UpdateCourse ),
        map( ({ course }) => this.coursesUtilitSrv.convertCourse( course ) ),
        mergeMap( courseItem =>
            this.coursesApiSrv.updateItem( courseItem ).pipe(
                map( () => UpdateCourseSuccess() ),
                tap( () => {
                    this.router.navigate([ 'courses' ]);
                }),
                catchError(() => of( UpdateCourseFail() ))
            )
        )
    ));

    removeCourse$ = createEffect(() => this.actions$.pipe(
        ofType( RemoveCourse ),
        mergeMap( ({ id }) =>
            this.coursesApiSrv.removeItem( id ).pipe(
                map( () => RemoveCourseSuccess() ),
                catchError(() => of( RemoveCourseFail() ))
            )
        )
    ));

    getAuthors$ = createEffect(() => this.actions$.pipe(
        ofType( GetAuthors ),
        mergeMap( () =>
            this.coursesApiSrv.loadAuthors().pipe(
                map( authors => GetAuthorsSuccess({ authors }) ),
                catchError(() => of( GetAuthorsFail() ))
            )
        )
    ));

    getSortAuthors$ = createEffect(() => this.actions$.pipe(
        ofType( GetSortAuthors ),
        mergeMap( ({ value }) =>
            this.coursesApiSrv.loadSortAuthors( value ).pipe(
                map( authors => GetSortAuthorsSuccess({ authors }) ),
                catchError(() => of( GetSortAuthorsFail() ))
            )
        )
    ));
}
