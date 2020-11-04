import {
    Directive,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

enum CourseHighlightClasses {
    Fresh = 'fresh',
    Upcoming = 'upcoming',
}

@Directive({
    selector: '[appCourseHighlight]'
})
export class CourseHighlightDirective implements OnInit {

    @Input('appCourseHighlight')
    private creationDate: string;

    constructor(
        private element: ElementRef
    ) { }

    ngOnInit() {
        this.changeCourseHighlight( this.creationDate );
    }

    private changeCourseHighlight( date: string ): void {
        const className: CourseHighlightClasses = this.getClassName( date );
        if ( className ) {
            this.element.nativeElement.classList.add( `course-item--${ className }` );
        }
    }

    private getClassName( date: string ): CourseHighlightClasses {
        const creationDate: number = new Date( date ).getTime();
        const currentDate: number = new Date( Date.now() ).getTime();
        const diffTime: number = currentDate - ( 3600 * 24 * 1000 * 14 );

        const isFresh: boolean = creationDate < currentDate && creationDate >= diffTime;
        const isUpcoming: boolean = creationDate > currentDate;
        if ( isFresh ) {
            return CourseHighlightClasses.Fresh;
        } else if ( isUpcoming ) {
            return CourseHighlightClasses.Upcoming;
        } else {
            return null;
        }
    }
}
