import { Directive, Input } from '@angular/core';

import { IModal } from '../../../interfaces/ModalInterface';

import { AppEventsService } from '../../../../commons/services/app-events/app-events.service';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class AbstractModalComponent {

    public results: any = [];

    @Input()
    public data: IModal;

    constructor(
        private eventsSrv: AppEventsService
    ) { }

    public handleOk(): void {
        this.data.resultEvent.next({
            status: true,
            data: this.results
        });
        this.eventsSrv.displayModalEvent$.next( false );
    }

    public handleCancel(): void {
        this.data.resultEvent.next( { status: false } );
        this.eventsSrv.displayModalEvent$.next( false );
    }
}
