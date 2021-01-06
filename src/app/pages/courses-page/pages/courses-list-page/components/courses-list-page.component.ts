import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { IAppState } from '../../../../../root-store/app.state';
import { getCourses, getIsFinalCourses } from '../../../courses/courses-store/courses.selectors';
import { ICourse } from '../../../courses/interfaces/CourseInterface';
import { ModalTypes } from '../../../../../modals/interfaces/ModalInterface';

import { CoursesService } from '../../../courses/services/courses/courses.service';
import { ModalsService } from '../../../../../modals/services/modals/modals.service';

@Component({
    selector: 'app-courses-list-page',
    templateUrl: './courses-list-page.component.html',
    styleUrls: ['./courses-list-page.component.scss']
})
export class CoursesListPageComponent implements OnInit, OnDestroy {

    public coursesList$: Observable<ICourse[]>;
    public isDisplayLoadMore$: Observable<boolean>;

    private isHandleLoadMore: boolean = false;

    private numberList: number = 3;
    private numberSortList: number = 3;

    private sortValue: string;

    private unsubscribe$ = new Subject<void>();

    constructor(
        public coursesSrv: CoursesService,
        private modalsSrv: ModalsService,
        private store: Store<IAppState>
    ) { }

    ngOnInit(): void {
        this.loadCourses();
        this.coursesList$ = this.store.pipe(
            select( getCourses ),
            /**
             * Fixed moment the invocation
             * You need to use this this.coursesList$
             */
            // withLatestFrom( this.coursesList$ ),
            // tap( ([ newCourses, oldCourses ]) => this.changeDisplayLoadMore(
            //     newCourses.length,
            //     oldCourses.length
            // )),
            // map( ([ newCourses ]) => newCourses ),
            takeUntil( this.unsubscribe$ )
        );
        this.isDisplayLoadMore$ = this.store.pipe(
            select( getIsFinalCourses ),
            takeUntil( this.unsubscribe$ )
        );
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

    public handleLoadMore( coursesLength: number = 0 ): void {
        const addNumberCourses = 5;
        const nextNumberCourses = coursesLength + addNumberCourses;
        // this.isHandleLoadMore = true;
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

    private changeDisplayLoadMore( newCoursesLength: number, oldCoursesLength: number ): void {
        if ( this.isHandleLoadMore ) {
            this.coursesSrv.changeLoadMore({ newCoursesLength, oldCoursesLength });
            this.isHandleLoadMore = false;
        } else if ( !this.store.select( getIsFinalCourses ) ) {
            this.coursesSrv.changeLoadMore();
        }
    }
}
