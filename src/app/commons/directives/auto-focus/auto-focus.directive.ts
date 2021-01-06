import {
    AfterViewChecked,
    Directive,
    ElementRef,
    HostListener,
    Input,
} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewChecked {

    private focus: boolean = false;

    @Input('appAutoFocus')
    private enableFocus: boolean;

    @HostListener('focus')
    onFocus() {
        this.focus = true;
    }

    constructor(
        private elementRef: ElementRef
    ) {}

    ngAfterViewChecked() {
        if ( this.enableFocus && !this.focus ) {
            this.elementRef.nativeElement.focus();
        }
    }
}
