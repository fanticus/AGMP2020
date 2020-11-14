import {
    Component,
    OnInit
} from '@angular/core';

import { ICourse } from '../../../commons/interfaces/ApiDataInterface';
import { ModalTypes } from '../../../modals/interfaces/ModalInterface';
import { FilterPipe } from '../pipes/filter/filter.pipe';

import { CoursesService } from '../services/courses/courses.service';
import { ModalsService } from '../../../modals/services/modals/modals.service';

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
        private modalsSrv: ModalsService
    ) { }

    ngOnInit(): void {
        this.getCourses();
    }

    public deleteCourse( course: ICourse ): void {
        this.modalsSrv.showModal( ModalTypes.Confirm, {
            title: 'Delete course?',
            description: `Are you sure you want to delete ${ course.title }?`,
            button: {
                ok: 'Yes, delete'
            }
        }).subscribe( result => {
            if ( result.status ) {
                this.courseSrv.removeCourse( course.id );
                this.getCourses();
            }
        });
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
