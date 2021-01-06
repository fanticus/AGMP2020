import { createAction, props } from '@ngrx/store';

import { ICourse } from '../interfaces/CourseInterface';

enum CoursesActionsTypes {
    GetCourses = '[Courses] Get Courses',
    GetCoursesSuccess = '[Courses] Get Courses Success',
    GetCoursesFail = '[Courses] Get Courses Fail',

    GetSortCourses = '[Courses] Get Sort Courses',
    GetSortCoursesSuccess = '[Courses] Get Sort Courses Success',
    GetSortCoursesFail = '[Courses] Get Sort Courses Fail',

    ChangeIsFinalCourses = '[Courses] Change IsFinalCourses',
    SetIsFinalCourses = '[Courses] Set IsFinalCourses',

    GetCourse = '[Course] Get Course',
    GetCourseSuccess = '[Course] Get Course Success',
    GetCourseFail = '[Course] Get Course Fail',

    CreateCourse = '[Course] Create Course',
    CreateCourseSuccess = '[Course] Create Course Success',
    CreateCourseFail = '[Course] Create Course Fail',

    UpdateCourse = '[Course] Update Course',
    UpdateCourseSuccess = '[Course] Update Course Success',
    UpdateCourseFail = '[Course] Update Course Fail',

    RemoveCourse = '[Course] Remove Course',
    RemoveCourseSuccess = '[Course] Remove Course Success',
    RemoveCourseFail = '[Course] Remove Course Fail',
}

export const GetCourses = createAction(
    CoursesActionsTypes.GetCourses,
    props<{ count?: number }>()
);

export const GetCoursesSuccess = createAction(
    CoursesActionsTypes.GetCoursesSuccess,
    props<{ courses: ICourse[] }>()
);

export const GetCoursesFail = createAction(
    CoursesActionsTypes.GetCoursesFail
);

export const GetSortCourses = createAction(
    CoursesActionsTypes.GetSortCourses,
    props<{ value: string, count?: number }>()
);

export const GetSortCoursesSuccess = createAction(
    CoursesActionsTypes.GetSortCoursesSuccess,
    props<{ courses: ICourse[] }>()
);

export const GetSortCoursesFail = createAction(
    CoursesActionsTypes.GetSortCoursesFail
);

export const ChangeIsFinalCourses = createAction(
    CoursesActionsTypes.ChangeIsFinalCourses,
    props<{ newCoursesLength?: number, oldCoursesLength?: number }>()
);

export const SetIsFinalCourses = createAction(
    CoursesActionsTypes.SetIsFinalCourses,
    props<{ isFinalCourses: boolean }>()
);

export const GetCourse = createAction(
    CoursesActionsTypes.GetCourse,
    props<{ id: number }>()
);

export const GetCourseSuccess = createAction(
    CoursesActionsTypes.GetCourseSuccess,
    props<{ course: ICourse }>()
);

export const GetCourseFail = createAction(
    CoursesActionsTypes.GetCourseFail
);

export const CreateCourse = createAction(
    CoursesActionsTypes.CreateCourse,
    props<{ course: ICourse }>()
);

export const CreateCourseSuccess = createAction(
    CoursesActionsTypes.CreateCourseSuccess
);

export const CreateCourseFail = createAction(
    CoursesActionsTypes.CreateCourseFail
);

export const UpdateCourse = createAction(
    CoursesActionsTypes.UpdateCourse,
    props<{ course: ICourse }>()
);

export const UpdateCourseSuccess = createAction(
    CoursesActionsTypes.UpdateCourseSuccess
);

export const UpdateCourseFail = createAction(
    CoursesActionsTypes.UpdateCourseFail
);

export const RemoveCourse = createAction(
    CoursesActionsTypes.RemoveCourse,
    props<{ id: number }>()
);

export const RemoveCourseSuccess = createAction(
    CoursesActionsTypes.RemoveCourseSuccess
);

export const RemoveCourseFail = createAction(
    CoursesActionsTypes.RemoveCourseFail
);
