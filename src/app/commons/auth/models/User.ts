import { IUser } from '../../interfaces/CourseInterface';

export class User implements IUser {

    public id: number;
    public firstName: string;
    public lastName: string;
}
