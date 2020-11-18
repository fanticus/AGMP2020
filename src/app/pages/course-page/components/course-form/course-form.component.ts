import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICourse } from '../../../../commons/interfaces/ApiDataInterface';

import { CoursesService } from '../../../courses-page/services/courses/courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

    public course: ICourse;
    public titleForm: string;

    constructor(
        private coursesService: CoursesService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe( params => {
            const courseId = params.get('id');
            this.getTitle( courseId );
            this.course = courseId === 'create'
                ? this.createCourse()
                : this.coursesService.getCourseById( courseId );
        });
    }

    public handleSave(): void {
        console.log('handleSave');
    }

    private getTitle( courseId: string ): void {
        this.titleForm = courseId === 'create'
            ? 'New course'
            : 'Edit course';
    }

    private createCourse(): ICourse {
        return {
            id: null,
            title: '',
            creationDate: null,
            duration: null,
            description: '',
            topRated: false,
        };
    }
}
