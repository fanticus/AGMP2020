import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    public searchValue: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    public handleSearch(): void {
        console.log( this.searchValue );
    }
}
