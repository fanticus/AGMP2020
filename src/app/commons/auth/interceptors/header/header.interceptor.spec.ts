import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { APP_IMPORTS } from '../../../../app.imports';

import { ApiService } from '../../../services/api/api.service';

import { HeaderInterceptor } from './header.interceptor';

describe(`HeaderInterceptor`, () => {
    let service: ApiService;
    let interceptor: HeaderInterceptor;
    let httpMock: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            providers: [
                ApiService,
                HeaderInterceptor,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HeaderInterceptor,
                    multi: true,
                },
            ],
        }).compileComponents();
    });

      beforeEach(() => {
          service = TestBed.inject(ApiService);
          interceptor = TestBed.inject(HeaderInterceptor);
          httpMock = TestBed.inject(HttpTestingController);
      });
      afterEach(() => {
          service = null;
          interceptor = null;
          httpMock.verify();
      });

      it('should create', () => {
          expect(httpMock).toBeTruthy();
      });
});
