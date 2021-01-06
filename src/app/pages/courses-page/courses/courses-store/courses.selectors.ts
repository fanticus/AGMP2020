import { createSelector, createFeatureSelector } from '@ngrx/store';

export const coursesStateKey = 'courses';

import { IAppState } from '../../../../root-store/app.state';
import { ICoursesState } from './courses.state';

export const getCoursesState = createFeatureSelector<IAppState, ICoursesState>( coursesStateKey );
export const getCourses = createSelector(
    getCoursesState,
    state => state.courses
);
export const getAuthors = createSelector(
    getCoursesState,
    state => state.authors
);
export const getIsFinalCourses = createSelector(
    getCoursesState,
    state => state.isFinalCourses
);
