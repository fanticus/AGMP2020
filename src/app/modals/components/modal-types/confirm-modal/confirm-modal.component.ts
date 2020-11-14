import { Component } from '@angular/core';
import {
    AbstractModalComponent
} from '../abstract-modal/abstract-modal.component';

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent extends AbstractModalComponent { }
