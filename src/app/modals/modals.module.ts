
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    ModalsOverlayComponent
} from './components/modals-overlay/modals-overlay.component';
import {
    ConfirmModalComponent
} from './components/modal-types/confirm-modal/confirm-modal.component';

import { ModalHostDirective } from './directives/modal-host.directive';

const MODALS_TYPES = [
    ConfirmModalComponent,
];

@NgModule({
    declarations: [
        ModalsOverlayComponent,
        ModalHostDirective,
        ...MODALS_TYPES,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [ ModalsOverlayComponent ],
    entryComponents: [ ...MODALS_TYPES ],
})
export class ModalsModule { }
