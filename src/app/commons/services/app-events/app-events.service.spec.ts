import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { AppEventsService } from './app-events.service';

describe('AppEventsService', () => {
    let service: AppEventsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(AppEventsService);
    });
    afterEach(() => {
        service = null;
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('httpRequestEvent$ testing', () => {
        expect(service.httpRequestEvent$).toBeDefined();
        expect(typeof service.httpRequestEvent$).toEqual('object');
        expect(service.httpRequestEvent$).toBeInstanceOf(Subject);
    });
});
