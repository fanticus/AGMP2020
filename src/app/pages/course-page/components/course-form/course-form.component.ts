import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ICourse } from '../../../../commons/interfaces/CourseInterface';

import { CoursesService } from '../../../courses-page/services/courses/courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnDestroy {

    public course: ICourse;
    public titleForm: string;

    private courseId: string;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private coursesSrv: CoursesService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.courseId = this.route.snapshot.paramMap.get( 'id' );
        this.getTitle( this.courseId );
        if ( this.courseId ) {
            this.coursesSrv.getItemById( +this.courseId )
                .pipe( takeUntil( this.unsubscribe$ ) )
                .subscribe( course => {
                    this.course = course;
                });
        } else {
            this.course = this.createCourse();
        }
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public handleSave(): void {
        this.courseId
            ? this.coursesSrv.updateItem( this.course )
            : this.coursesSrv.create( this.course );
    }

    private getTitle( courseId: string ): void {
        this.titleForm = courseId
            ? 'Edit course'
            : 'New course';
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
}
