import { IAuthor, ICourse } from '../interfaces/CourseInterface';

export class Course implements ICourse {

    public id: number;
    public title: string;
    public creationDate: string;
    public duration: number;
    public description: string;
    public topRated: boolean;
    public authors: IAuthor[];
}
