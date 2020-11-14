import {
    Component,
    OnInit
} from '@angular/core';

import { ICourse } from '../../../commons/interfaces/ApiDataInterface';
import { FilterPipe } from '../pipes/filter/filter.pipe';

import { CoursesService } from '../services/courses/courses.service';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.scss'],
    providers: [ FilterPipe ]
})
export class CoursesPageComponent implements OnInit {

    public coursesData: ICourse[] = [];
    public coursesList: ICourse[] = [];

    private filter: string;

    constructor(
        private courseSrv: CoursesService,
        private filterPipe: FilterPipe,
    ) { }

    ngOnInit(): void {
        this.getCourses();
    }

    public deleteCourse( course: ICourse ): void {
        this.courseSrv.removeCourse( course.id );
        this.getCourses();
    }

    public handleLoadMore(): void {
        console.log( 'Load more' );
    }

    public filterCourses( value: string ): void {
        this.filter = value;
        this.coursesList = this.filterPipe
            .transform( this.coursesData, value );
    }

    private getCourses(): void {
        this.courseSrv.getCourses().subscribe( courses => {
            this.coursesData = courses;
            if ( this.filter ) {
                this.filterCourses( this.filter );
            } else {
                this.coursesList = [ ...this.coursesData ];
            }
        });
    }
}
