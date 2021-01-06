import { Injectable } from '@angular/core';

import { ICourse } from '../../interfaces/CourseInterface';
import { IApiCourse } from '../../interfaces/ApiCourseInterface';

@Injectable()
export class CoursesUtilitiesService {

    constructor() { }

    public convertCourseData( course: IApiCourse ): ICourse {
        return {
            id: course.id,
            title: course.name,
            creationDate: course.date,
            duration: course.length,
            topRated: course.isTopRated,
            description: course.description,
            authors: course.authors,
        };
    }

    public convertCourse( course: ICourse ): IApiCourse {
        return {
            id: course.id,
            name: course.title,
            date: course.creationDate,
            length: Number( course.duration ),
            isTopRated: course.topRated,
            description: course.description,
            authors: course.authors,
        };
    }
}
