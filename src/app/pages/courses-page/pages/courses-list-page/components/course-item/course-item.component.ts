import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import { ICourse } from '../../../../courses/interfaces/CourseInterface';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {

    @Input()
    public courseItem: ICourse;

    @Output()
    private deleteCourse = new EventEmitter<ICourse>();

    constructor() { }

    public handleDelete(): void {
        this.deleteCourse.emit( this.courseItem );
    }
}
