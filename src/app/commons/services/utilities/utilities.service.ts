import { Injectable } from '@angular/core';

import { IApiCourse } from '../../interfaces/ApiCourseInterface';
import { ICourse } from '../../interfaces/CourseInterface';

@Injectable({
    providedIn: 'root'
})
export class UtilitiesService {

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
