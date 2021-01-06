import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ModalsOverlayComponent
} from './components/modals-overlay/modals-overlay.component';
import {
    ConfirmModalComponent
} from './components/modal-types/confirm-modal/confirm-modal.component';

import { ModalHostDirective } from './directives/modal-host.directive';

import { ModalsService } from './services/modals/modals.service';

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
    ],
    providers: [ ModalsService ],
    exports: [ ModalsOverlayComponent ],
    entryComponents: [ ...MODALS_TYPES ],
})
export class ModalsModule { }
