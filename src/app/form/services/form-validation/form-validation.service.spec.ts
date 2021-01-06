import { TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { FormValidationService } from './form-validation.service';

describe('FormValidationService', () => {
    let service: FormValidationService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(FormValidationService);
    });
    afterEach(() => {
        service = null;
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });
});
