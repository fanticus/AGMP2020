export interface ISettings {
    urls?: IUrlsSettings;
}

export enum UrlsSettingsTypes {
    Api = 'api',
    Login = 'login',
    UserInfo = 'userInfo',
    Courses = 'courses',
    Authors = 'authors'
}

export type IUrlsSettings = {
    [ key in UrlsSettingsTypes ]: string;
};
