import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_PROVIDERS } from './../../../app.providers';

import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
    let interceptor: LoaderInterceptor;
    let httpMock: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            providers: [
                LoaderInterceptor,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LoaderInterceptor,
                    multi: true,
                },
                APP_PROVIDERS,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        interceptor = TestBed.inject(LoaderInterceptor);
        httpMock = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        interceptor = null;
        httpMock.verify();
    });

    it('should create', () => {
        expect(httpMock).toBeTruthy();
    });
});
