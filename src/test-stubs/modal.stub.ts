import { Subject } from 'rxjs';

import { IModal } from '../app/modals/interfaces/ModalInterface';

export const modalDataStub: IModal = {
    displayComponent: '',
    title: 'Modal title',
    button: {
        ok: 'Modal button ok'
    },
    description: 'Modal description',
    resultEvent: new Subject()
};
