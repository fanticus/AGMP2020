export interface ICourse {
    id: string;
    title: string;
    creationDate: string;
    duration: string | number;
    description: string;
    topRated: boolean;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
}
