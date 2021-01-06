import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppEventsService {

    public httpRequestEvent$ = new Subject<boolean>();
    public displayModalEvent$ = new Subject<boolean>();
}
