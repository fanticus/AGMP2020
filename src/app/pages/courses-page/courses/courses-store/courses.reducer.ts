import { createReducer, on, Action } from '@ngrx/store';

import { ICoursesState, initialCoursesState } from './courses.state';
import {
    GetCoursesSuccess,
    GetCourseSuccess,
    GetSortCoursesSuccess,
    SetIsFinalCourses,
} from './courses.actions';

const reducer = createReducer(
    initialCoursesState,
    on( GetCoursesSuccess, ( state, { courses } ) => {
        return {
            ...state,
            courses: [ ...courses ]
        };
    }),
    on( GetSortCoursesSuccess, ( state, { courses } ) => {
        return {
            ...state,
            courses: [ ...courses ]
        };
    }),
    on( SetIsFinalCourses, ( state, { isFinalCourses } ) => {
        return {
            ...state,
            isFinalCourses
        };
    }),
    on( GetCourseSuccess, ( state, { course } ) => {
        return {
            ...state,
            courses: state.courses.length
              ? state.courses.map( courseItem => {
                    return courseItem.id !== course.id ? courseItem : course;
                })
              : [ course ]
        };
    }),
);

export function coursesReducer( state: ICoursesState, action: Action ) {
    return reducer( state, action );
}
