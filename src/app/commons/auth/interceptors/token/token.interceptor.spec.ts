import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { APP_IMPORTS } from '../../../../app.imports';
import { APP_PROVIDERS } from './../../../../app.providers';

import { TokenInterceptor } from './token.interceptor';

describe(`TokenInterceptor`, () => {
    let interceptor: TokenInterceptor;
    let httpMock: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            providers: [
                TokenInterceptor,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptor,
                    multi: true,
                },
                APP_PROVIDERS,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        interceptor = TestBed.inject(TokenInterceptor);
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
