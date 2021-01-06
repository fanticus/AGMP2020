export interface ICourse {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    topRated: boolean;
    authors: IAuthorCourse[];
}

export interface IAuthorCourse {
    id: number;
    name: string;
    lastName: string;
}
