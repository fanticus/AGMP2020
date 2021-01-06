import { TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../../app.declarations';

import { CoursesUtilitiesService } from './courses-utilities.service';

describe('CoursesUtilitiesService', () => {
    let service: CoursesUtilitiesService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(CoursesUtilitiesService);
    });
    afterEach(() => {
        service = null;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
