import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../../../../commons/interfaces/CourseInterface';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform( courses: ICourse[], sortByField: string ): ICourse[] {
        return this.getSortedCourses( courses, sortByField );
    }

    private getSortedCourses( courses: ICourse[], sortByField: string ): ICourse[] {
        const sorted: ICourse[] = courses.sort( ( a, b ) => {
            if ( a[ sortByField ] < b[ sortByField ] ) {
                return 1;
            } else if ( a[ sortByField ] > b[ sortByField ] ) {
                return -1;
            } else {
                return 0;
            }
        });
        return sorted;
    }
}
