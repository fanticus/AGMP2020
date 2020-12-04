export interface ICourse {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    topRated: boolean;
    authors: IAuthor[];
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
}

export interface IAuthor {
    id: number;
    name: string;
    lastName: string;
}
