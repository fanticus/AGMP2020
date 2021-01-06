import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../../root-store/app.state';

import { getAuthors } from '../../../pages/courses-page/courses/courses-store/courses.selectors';
import { IApiAuthor } from '../../../pages/courses-page/courses/interfaces/ApiAuthorInterface';
import { IAuthorCourse } from '../../../pages/courses-page/courses/interfaces/CourseInterface';

import {
    CoursesService
} from '../../../pages/courses-page/courses/services/courses/courses.service';

@Component({
    selector: 'app-authors-select',
    templateUrl: './authors-select.component.html',
    styleUrls: ['./authors-select.component.scss']
})
export class AuthorsSelectComponent implements OnInit, OnDestroy {

    public authorsList$: Observable<IApiAuthor[]>;
    public selectedValues$ = new Subject<IAuthorCourse>();

    public searchValue: string = '';
    public searchEvent$ = new Subject<string>();

    @Input()
    public selectedValues: IAuthorCourse[];
    @Input()
    public title: string;
    @Input()
    public placeholder: string;
    @Input()
    public isError: boolean;

    @Output()
    private deleteAuthor = new EventEmitter<IAuthorCourse>();
    @Output()
    private addAuthor = new EventEmitter<IAuthorCourse>();
    @Output()
    private touchEvent = new EventEmitter<void>();

    private sortValue: string;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private coursesSrv: CoursesService,
        private store: Store<IAppState>
    ) { }

    ngOnInit() {
      this.authorsList$ = this.store.pipe(
          select( getAuthors ),
          takeUntil( this.unsubscribe$ )
      );
      this.searchEvent$.pipe(
              debounceTime(500),
              filter( value => !value || value.length >= 3 ),
              takeUntil( this.unsubscribe$ )
          ).subscribe( value => {
              this.loadSortAuthors( value );
          });
      this.loadAuthors();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public deleteItem( event: any, author: IAuthorCourse ) {
        this.clearEvent( event );
        this.deleteAuthor.emit( author );
    }

    public handleTouch() {
        setTimeout(() => {
            this.touchEvent.emit();
        }, 0);
    }

    public selectValue( author: IAuthorCourse ) {
        if ( !this.selectedValues || !this.selectedValues
            .find( authorsItem => authorsItem.id === author.id ) ) {
            this.addAuthor.emit( author );
            this.searchEvent$.next('');
        }
    }

    public checkSelected( author: IAuthorCourse ): boolean {
        return !!(this.selectedValues && this.selectedValues
            .find( authorsItem => authorsItem.id === author.id ));
    }

    private loadAuthors(): void {
        this.coursesSrv.loadAuthors();
    }

    private loadSortAuthors( value?: string ): void {
        if ( !this.sortValue && !value ) {
            return;
        }
        this.sortValue = value;
        this.coursesSrv.loadSortAuthors( value );
    }

    private clearEvent( event: any ) {
        if ( event ) {
            event.preventDefault();
            event.stopPropagation();
            event.cancelBubble = true;
        }
    }
}
