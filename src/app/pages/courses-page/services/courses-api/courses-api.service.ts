import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IApiCourse } from '../../../../commons/interfaces/ApiDataInterface';

import { ApiService } from './../../../../commons/services/api/api.service';

@Injectable({
    providedIn: 'root'
})
export class CoursesApiService {

    private httpParams: any = {
        sort: 'date',
        start: 0,
    };

    constructor(
        private apiSrv: ApiService,
    ) { }

    public load( count?: number ): Observable<IApiCourse[]> {
        const params = {
            ...this.httpParams,
            count: count || 3,
        };
        return this.apiSrv.request( 'get', 'courses', { params } );
    }

    public loadSort( value: string, count?: number ): Observable<IApiCourse[]> {
        const params = {
            ...this.httpParams
        };
        if (count) params.count = count;
        if (value) params.textFragment = value;
        return this.apiSrv.request( 'get', 'courses', { params } );
    }

    public create( course: IApiCourse ): Observable<{}> {
        return this.apiSrv.request( 'post', 'courses', course );
    }

    public removeItem( id: number ): Observable<{}> {
        return this.apiSrv.request( 'delete', `courses/${ id }` );
    }

    public updateItem( course: IApiCourse ) {
        return this.apiSrv.request( 'patch', `courses/${ course.id }`, course );
    }

    public getItemById( id: number ): Observable<IApiCourse> {
        return this.apiSrv.request( 'get', `courses/${ id }` );
    }
}
