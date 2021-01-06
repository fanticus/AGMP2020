import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IApiCourse } from '../../interfaces/ApiCourseInterface';

import { ApiService } from '../../../../../commons/services/api/api.service';
import { UrlsSettingsTypes } from '../../../../../commons/interfaces/SettingsInterface';

@Injectable()
export class CoursesApiService {

    private httpParams: any = {
        sort: 'date',
        start: 0,
    };

    constructor(
        private apiSrv: ApiService,
    ) { }

    public load( count?: number ): Observable<IApiCourse[]> {
        const url = `${ UrlsSettingsTypes.Api }/${ UrlsSettingsTypes.Courses }`;
        const params = {
            ...this.httpParams,
            count: count || 3,
        };
        return this.apiSrv.request( 'get', url, { params } );
    }

    public loadSort( value: string, count?: number ): Observable<IApiCourse[]> {
        const url = `${ UrlsSettingsTypes.Api }/${ UrlsSettingsTypes.Courses }`;
        const params = {
            ...this.httpParams
        };
        if (count) params.count = count;
        if (value) params.textFragment = value;
        return this.apiSrv.request( 'get', url, { params } );
    }

    public createItem( course: IApiCourse ): Observable<{}> {
        const url = `${ UrlsSettingsTypes.Api }/${ UrlsSettingsTypes.Courses }`;
        return this.apiSrv.request( 'post', url, course );
    }

    public removeItem( id: number ): Observable<{}> {
        const url = `${ UrlsSettingsTypes.Api }/${
            UrlsSettingsTypes.Courses }/${ id }`;
        return this.apiSrv.request( 'delete', url );
    }

    public updateItem( course: IApiCourse ): Observable<{}> {
        const url = `${ UrlsSettingsTypes.Api }/${
            UrlsSettingsTypes.Courses }/${ course.id }`;
        return this.apiSrv.request( 'patch', url, course );
    }

    public getItemById( id: number ): Observable<IApiCourse> {
        const url = `${ UrlsSettingsTypes.Api }/${ UrlsSettingsTypes.Courses }/${ id }`;
        return this.apiSrv.request( 'get', url );
    }
}
