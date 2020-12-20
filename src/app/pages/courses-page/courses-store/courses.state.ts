import { ICourse } from '../../../commons/interfaces/CourseInterface';

export interface ICoursesState {
    courses: ICourse[];
    isFinalCourses: boolean;
}

export const initialCoursesState: ICoursesState = {
    courses: [],
    isFinalCourses: true
};
