import { TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(ApiService);
    });
    afterEach(() => {
        service = null;
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });
});
