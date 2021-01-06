import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { takeUntil, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { getCourses } from '../../../../courses/courses-store/courses.selectors';

import { IAppState } from '../../../../../../root-store/app.state';
import { ICourse } from '../../../../courses/interfaces/CourseInterface';
import { CourseForm } from '../../../../../../form/models/CourseForm';

import { CoursesService } from '../../../../courses/services/courses/courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnDestroy {

    public form: FormGroup;

    public titleForm$ = new BehaviorSubject<string>('');
    private idCourse$ = new Subject<number>();
    private idCourse: number;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private coursesSrv: CoursesService,
        private route: ActivatedRoute,
        private store: Store<IAppState>
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.subscribeToEvent();
        this.getCourse();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public handleSave(): void {
        this.sendCourse();
    }

    private getCourse(): void {
        const idCourse: number = +this.route.snapshot.paramMap.get( 'id' );
        this.getTitle( idCourse );
        if ( idCourse ) {
            this.loadCourse( idCourse );
        }
        this.idCourse$.next( idCourse );
    }

    private loadCourse( id: number ): void {
        this.coursesSrv.getItemById( id );
    }

    private getTitle( courseId: number ): void {
        const title = courseId
            ? 'Edit course'
            : 'New course';
        this.titleForm$.next( title );
    }

    private createForm(): void {
        const initData = this.getInitData();
        this.form = CourseForm.createFormObject();
        this.updateForm( initData );
    }

    private getInitData(): ICourse {
        return {
            id: null,
            title: '',
            description: '',
            duration: null,
            creationDate: new Date().toDateString(),
            authors: null,
            topRated: false
        };
    }

    private updateForm( course: ICourse ): void {
        this.form.patchValue({
            id: course.id,
            title: course.title,
            description: course.description,
            duration: course.duration,
            creationDate: formatDate(course.creationDate, 'MM/dd/yyyy', 'en-US' ),
            authors: course.authors,
            topRated: course.topRated
        });
    }

    private sendCourse(): void {
        const formValue: ICourse = this.form.value;
        const course: ICourse = {
            id: formValue.id || this.idCourse,
            title: formValue.title,
            description: formValue.description,
            duration: formValue.duration,
            creationDate: new Date(
                  formatDate(formValue.creationDate, 'yyyy-MM-dd', 'en-US')
            ).toISOString(),
            authors: formValue.authors,
            topRated: formValue.topRated
        };
        this.idCourse
            ? this.coursesSrv.updateItem( course )
            : this.coursesSrv.createItem( course );
    }

    private subscribeToEvent(): void {
        this.store.pipe(
                select( getCourses ),
                withLatestFrom( this.idCourse$ ),
                tap( ([ courses, idCourse ]) => this.idCourse = idCourse ),
                switchMap( ([ courses, idCourse ]) => of(
                    courses.find( course => course.id === idCourse )
                )),
                takeUntil( this.unsubscribe$ )
            ).subscribe( course => {
                this.updateForm( course );
            });
    }
}
