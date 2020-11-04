import { ICourse } from '../interfaces/ApiDataInterface';

export class Course implements ICourse {

    public id: string;
    public title: string;
    public creationDate: string;
    public duration: string | number;
    public description: string;
    public topRated: boolean;
}
