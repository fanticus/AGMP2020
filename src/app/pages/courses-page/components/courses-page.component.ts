import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ICourse } from '../../../commons/interfaces/CourseInterface';
import { ModalTypes } from '../../../modals/interfaces/ModalInterface';

import { CoursesService } from '../services/courses/courses.service';
import { ModalsService } from '../../../modals/services/modals/modals.service';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {

    public coursesList: ICourse[] = [];

    public isDisplayLoadMore: boolean = true;
    private isHandleLoadMore: boolean = false;

    private numberList: number = 3;
    private numberSortList: number = 3;

    private sortValue: string;

    private unsubscribe$ = new Subject<void>();

    constructor(
        public coursesSrv: CoursesService,
        private modalsSrv: ModalsService
    ) { }

    ngOnInit(): void {
        this.loadCourses();
        this.coursesSrv.courseList$
            .pipe( takeUntil( this.unsubscribe$ ) )
            .subscribe( courses => {
                this.checkLoadMore( courses );
                this.coursesList = courses;
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public loadCourses(): void {
        this.coursesSrv.load( this.numberList );
    }

    public loadSortCourses( value?: string ): void {
        if ( !this.sortValue && !value ) {
            return;
        }
        this.clearSortValue( value );
        this.sortValue = value;
        const numberlist = value ? this.numberSortList : this.numberList;
        this.coursesSrv.loadSort( value, numberlist );
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
                this.coursesSrv.removeItem( course.id );
                this.updateCourses();
            }
        });
    }

    public handleLoadMore(): void {
        const addNumberCourses = 5;
        const nextNumberCourses = this.coursesList.length + addNumberCourses;
        this.isHandleLoadMore = true;
        if ( this.sortValue ) {
            this.numberSortList = nextNumberCourses;
        } else {
            this.numberList = nextNumberCourses;
        }
        this.updateCourses();
    }

    private updateCourses(): void {
        if ( this.sortValue ) {
            this.loadSortCourses( this.sortValue );
        } else {
            this.loadCourses();
        }
    }

    private clearSortValue( value: string ): void {
        if ( !value || this.sortValue
            && !this.sortValue.includes( value ) ) {
            this.numberSortList = 3;
        }
    }

    private checkLoadMore( courses: ICourse[] ): void {
        if ( this.isHandleLoadMore ) {
            this.isDisplayLoadMore = this.coursesList.length !== courses.length;
            this.isHandleLoadMore = false;
        } else if ( !this.isDisplayLoadMore ) {
            this.isDisplayLoadMore = true;
        }
    }
}
