import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

    private courseId: string;

    constructor(
        private coursesService: CoursesService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.courseId = this.route.snapshot.paramMap.get( 'id' );
        this.getTitle( this.courseId );
        this.course = this.courseId
            ? this.coursesService.getCourseById( this.courseId )
            : this.createCourse();
    }

    public handleSave(): void {
        this.courseId
            ? this.coursesService.updateCourse( this.course )
            : this.coursesService.createCourse( this.course );
        this.router.navigate([ '/courses' ]);
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
        };
    }
}
