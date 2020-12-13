import { TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { UtilitiesService } from './utilities.service';

describe('UtilitiesService', () => {
    let service: UtilitiesService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(UtilitiesService);
    });
    afterEach(() => {
        service = null;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
