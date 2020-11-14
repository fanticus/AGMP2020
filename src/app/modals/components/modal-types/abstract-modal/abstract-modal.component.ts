import { Directive, Input } from '@angular/core';

import { IModal } from '../../../interfaces/ModalInterface';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class AbstractModalComponent {

    public results: any = [];

    @Input()
    public data: IModal;

    constructor() { }

    public hideOverlay(): void { }

    public handleOk(): void {
        this.data.resultEvent.next({
            status: true,
            data: this.results
        });
        this.hideOverlay();
    }

    public handleCancel(): void {
        this.data.resultEvent.next( { status: false } );
        this.hideOverlay();
    }
}
