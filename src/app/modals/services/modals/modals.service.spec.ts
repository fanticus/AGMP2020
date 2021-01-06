import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { ModalTypes } from '../../interfaces/ModalInterface';

import { modalDataStub } from '../../../../stubs/test-stubs/modal.stub';

import { ModalsService } from './modals.service';

describe('ModalsService', () => {
    let service: ModalsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(ModalsService);
    });
    afterEach(() => {
        service = null;
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
