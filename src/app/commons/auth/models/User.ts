import { IUser } from '../interfaces/AuthInterface';

export class User implements IUser {

    public id: number;
    public firstName: string;
    public lastName: string;
}
