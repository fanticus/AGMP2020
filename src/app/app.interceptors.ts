import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    LoaderInterceptor
} from './commons/interceptors/loader/loader.interceptor';
import {
    HeaderInterceptor
} from './commons/interceptors/header/header.interceptor';
import {
    TokenInterceptor
} from './auth/interceptors/token/token.interceptor';

export const APP_INTERCEPTORS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HeaderInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
];
