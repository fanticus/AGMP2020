import { Component, OnChanges, OnInit } from '@angular/core';

import { ICourse } from '../../../commons/interfaces/ApiDataInterface';

import { coursesDataStub } from '../../../../assets/dev-stubs/coursesData';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnChanges {

    public coursesData: ICourse[] = [];

    constructor() { }

    ngOnInit(): void {
        console.log( 'ngOnInit' );
        this.coursesData = coursesDataStub;
    }

    ngOnChanges() {
        console.log( 'ngOnChanges' );
    }

    public deleteCourse( id: string ): void {
        console.log( id );
    }

    public handleLoadMore(): void {
        console.log( 'Load more' );
    }
}
