import { TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from './../../../app.declarations';
import { APP_IMPORTS } from './../../../app.imports';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
   let guard: AuthGuard;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        guard = TestBed.inject(AuthGuard);
    });
    afterEach(() => {
        guard = null;
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
