import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
export class CoursesPageComponent implements OnInit, OnDestroy {

    public coursesData: ICourse[] = [];
    public coursesList: ICourse[] = [];

    private filter: string;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private courseSrv: CoursesService,
        private filterPipe: FilterPipe,
        private modalsSrv: ModalsService
    ) { }

    ngOnInit(): void {
        this.getCourses();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public deleteCourse( course: ICourse ): void {
        this.modalsSrv.showModal( ModalTypes.Confirm, {
            title: 'Delete course?',
            description: `Are you sure you want to delete ${ course.title }?`,
            button: {
                ok: 'Yes, delete'
            }
        }).pipe( takeUntil( this.unsubscribe$ ) )
        .subscribe( result => {
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
        this.courseSrv.getCourses()
          .pipe( takeUntil( this.unsubscribe$ ) )
          .subscribe( courses => {
              this.coursesData = courses;
              if ( this.filter ) {
                  this.filterCourses( this.filter );
              } else {
                  this.coursesList = [ ...this.coursesData ];
              }
          });
    }
}
