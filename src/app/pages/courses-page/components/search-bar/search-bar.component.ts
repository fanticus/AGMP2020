import {
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

    public searchValue: string = '';
    public searchEvent$ = new Subject<string>();

    private unsubscribe$ = new Subject<void>();

    @Output()
    private eventSearch = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
        this.searchEvent$.pipe(
                debounceTime(500),
                filter( value => !value || value.length >= 3 ),
                takeUntil( this.unsubscribe$ )
            ).subscribe( value => {
                this.eventSearch.emit( value );
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
