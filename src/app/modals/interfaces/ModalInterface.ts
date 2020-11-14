import { Type } from '@angular/core';

export interface IModal {
    displayComponent?: Type<any> | string;
    title?: string;
    button?: {
        ok?: string;
    };
    description?: string;
    resultEvent?: any;
}

export interface IModalResponse {
    status: boolean;
    data?: any;
}

export type IModalTypes = {
    [ key in ModalTypes ]: Type<any> | string;
};

export enum ModalTypes {
    Confirm = 'confirm-modal',
    Default = ''
}
