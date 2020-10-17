import { IUser } from '../interfaces/ApiDataInterface';

export class User implements IUser {

    public id: string;
    public firstName: string;
    public lastName: string;
}
