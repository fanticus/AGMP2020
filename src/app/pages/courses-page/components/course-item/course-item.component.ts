import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

import { ICourse } from '../../../../commons/interfaces/ApiDataInterface';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

    @Input()
    public courseItem: ICourse;

    @Output()
    private deleteCourse = new EventEmitter<ICourse>();

    constructor() { }

    ngOnInit(): void {
    }

    public handleDelete(): void {
        this.deleteCourse.emit( this.courseItem );
    }
}
