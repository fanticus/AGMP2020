import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { ModalTypes } from '../../interfaces/ModalInterface';

import { modalDataStub } from '../../../../test-stubs/modal.stub';

import { ModalsService } from './modals.service';

describe('ModalsService', () => {
    let service: ModalsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ModalsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('newModal$ testing', () => {
        expect(service.newModal$).toBeDefined();
        expect(typeof service.newModal$).toEqual('object');
        expect(service.newModal$).toBeInstanceOf(Subject);
    });
    it('showModal() testing', () => {
        spyOn(service.newModal$, 'next');
        spyOn((service as any).MODAL_TYPES, 'hasOwnProperty')
            .and.returnValue(true);

        const value = modalDataStub;
        const res = service.showModal(ModalTypes.Confirm, value);

        expect(service.newModal$.next).toHaveBeenCalled();
        expect(res).toBeTruthy();
        expect(res).toEqual(new Subject());
    });
});
