import {
    Component,
    Input,
    HostBinding,
    HostListener,
} from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent {

    public displayDropdown: boolean = false;

    @Input()
    public list: any[];
    @Input()
    public selectedItem: any;

    @HostBinding( 'attr.tabindex' )
    public tabindex = '0';

    @HostListener( 'focusout', [ '$event.target' ] )
    public onBlur( target: any ): void {
        if ( this.displayDropdown ) {
            this.displayDropdown = false;
        }
    }

    constructor() { }

    public changeDisplayDropdown(): void {
        this.displayDropdown = !this.displayDropdown;
    }
}
