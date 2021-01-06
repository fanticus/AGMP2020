export interface IApiCourse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    isTopRated: boolean;
    authors: IApiAuthor[];
}

export interface IApiAuthor {
    id: number;
    name: string;
    lastName: string;
}
