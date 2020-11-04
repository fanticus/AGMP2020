import {
    Component,
    EventEmitter,
    Output
} from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

    public searchValue: string = '';

    @Output()
    private eventSearch = new EventEmitter<string>();

    constructor() { }

    public handleSearch(): void {
        this.eventSearch.emit( this.searchValue );
    }
}
