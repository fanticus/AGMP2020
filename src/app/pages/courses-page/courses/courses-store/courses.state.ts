import { IApiAuthor } from '../interfaces/ApiAuthorInterface';
import { ICourse } from '../interfaces/CourseInterface';

export interface ICoursesState {
    courses: ICourse[];
    authors: IApiAuthor[];
    isFinalCourses: boolean;
}

export const initialCoursesState: ICoursesState = {
    courses: [],
    authors: [],
    isFinalCourses: true
};
