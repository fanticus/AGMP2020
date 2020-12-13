import { BehaviorSubject } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
    let service: SettingsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(SettingsService);
    });
    afterEach(() => {
        service = null;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('settings$ testing', () => {
        expect((service as any).settings$).toBeDefined();
        expect(typeof (service as any).settings$).toEqual('object');
        expect((service as any).settings$).toBeInstanceOf(BehaviorSubject);
    });
    it('settings testing', () => {
        expect((service as any).settings).toBeDefined();
        expect(typeof (service as any).settings).toEqual('object');
    });
});
