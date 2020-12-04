export interface IApiToken {
    token: string;
}

export interface IApiLogin {
    login: string;
    password: string;
}

export interface IApiCourse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    isTopRated: boolean;
    authors: IApiAuthor[];
}

export interface IApiUser {
    id: number;
    fakeToken: string;
    name: IApiNameUser;
    login: string;
    password: string;
}

export interface IApiNameUser {
    first: string;
    last: string;
}

export interface IApiAuthor {
    id: number;
    name: string;
    lastName: string;
}
