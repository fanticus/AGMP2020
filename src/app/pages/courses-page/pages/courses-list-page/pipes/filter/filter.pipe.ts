import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../../../../courses/interfaces/CourseInterface';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform( courses: ICourse[], filterValue: string ): ICourse[] {
        return this.getFilteredCourses( courses, filterValue );
    }

    private getFilteredCourses( courses: ICourse[], filterValue: string ): ICourse[] {
        return courses.filter( course => {
            return new RegExp( filterValue, 'gi' ).test( course.title );
        });
    }
}
