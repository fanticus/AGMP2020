import { Component, OnChanges, OnInit } from '@angular/core';

import { ICourse } from '../../../commons/interfaces/ApiDataInterface';

import { coursesDataStub } from '../../../../assets/dev-stubs/coursesData';

import { FilterPipe } from '../pipes/filter/filter.pipe';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.scss'],
    providers: [ FilterPipe ]
})
export class CoursesPageComponent implements OnInit, OnChanges {

    public coursesData: ICourse[] = [];
    public coursesList: ICourse[] = [];

    constructor(
        private filterPipe: FilterPipe
    ) { }

    ngOnInit(): void {
        console.log( 'ngOnInit' );
        this.coursesData = coursesDataStub;
        this.coursesList = [ ...this.coursesData ];
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

    public filterCourses( value: string ): void {
        this.coursesList = this.filterPipe
            .transform( this.coursesData, value );
    }
}
