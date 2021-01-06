export interface IApiCourse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    isTopRated: boolean;
    authors: IApiAuthorCourse[];
}

export interface IApiAuthorCourse {
    id: number;
    name: string;
    lastName: string;
}
