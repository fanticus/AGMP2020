import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {
    IModal,
    IModalResponse,
    IModalTypes,
    ModalTypes
} from '../../interfaces/ModalInterface';

import {
    ConfirmModalComponent
} from '../../components/modal-types/confirm-modal/confirm-modal.component';

@Injectable({
    providedIn: 'root'
})
export class ModalsService {

    public newModal$ = new Subject<IModal>();

    private MODAL_TYPES: IModalTypes = {
        [ ModalTypes.Confirm ]: ConfirmModalComponent,
        [ ModalTypes.Default ]: ''
    };

    constructor() { }

    public showModal(
        modalType: ModalTypes,
        data: IModal
    ): Subject<IModalResponse> {
        this.MODAL_TYPES.hasOwnProperty( modalType )
            ? data.displayComponent = this.MODAL_TYPES[ modalType ]
            : data.displayComponent = this.MODAL_TYPES[ ModalTypes.Default ];
        data.resultEvent = new Subject<void>();
        this.newModal$.next( data );
        return data.resultEvent;
    }
}
