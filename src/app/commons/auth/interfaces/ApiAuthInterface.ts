export interface IApiToken {
  token: string;
}

export interface IApiLogin {
  login: string;
  password: string;
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
