import { IUserState } from '../auth/user-store/user.state';
import { ICoursesState } from '../pages/courses-page/courses/courses-store/courses.state';

export interface IAppState {
    readonly user: IUserState | null;
    readonly courses: ICoursesState | null;
}

export const initialAppState: IAppState = {
    user: null,
    courses: null
};
