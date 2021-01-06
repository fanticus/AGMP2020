import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { getCourses } from '../../../../courses/courses-store/courses.selectors';

import { IAppState } from '../../../../../../root-store/app.state';
import { ICourse } from '../../../../courses/interfaces/CourseInterface';

import { CoursesService } from '../../../../courses/services/courses/courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnDestroy {

    public course$: Observable<ICourse>;
    public titleForm$ = new BehaviorSubject<string>('');

    private courseId: string;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private coursesSrv: CoursesService,
        private route: ActivatedRoute,
        private store: Store<IAppState>
    ) { }

    ngOnInit(): void {
        this.getIdCourse();
        this.getCourse();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public handleSave( course: ICourse ): void {
        this.courseId
            ? this.coursesSrv.updateItem( course )
            : this.coursesSrv.createItem( course );
    }

    private getIdCourse(): void {
        this.courseId = this.route.snapshot.paramMap.get( 'id' );
    }

    private getCourse(): void {
        this.course$ = of( this.createCourse() );
        const idCourse: number = +this.courseId;
        this.getTitle( idCourse );
        if ( idCourse ) {
            this.course$ = this.store.select( getCourses ).pipe(
                map( courses => courses.find( course => course.id === idCourse ) ),
                takeUntil( this.unsubscribe$ )
            );
            this.loadCourse( idCourse );
        }
    }

    private loadCourse( id: number ): void {
        this.coursesSrv.getItemById( id );
    }

    private createCourse(): ICourse {
        return {
            id: null,
            title: '',
            creationDate: null,
            duration: null,
            description: '',
            topRated: false,
            authors: []
        };
    }

    private getTitle( courseId: number ): void {
        const title = courseId
            ? 'Edit course'
            : 'New course';
        this.titleForm$.next( title );
    }
}
