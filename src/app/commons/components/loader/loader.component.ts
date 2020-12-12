import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppEventsService } from '../../services/app-events/app-events.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

    public displayLoader$ = new Subject<boolean>();

    private unsubscribe$ = new Subject<void>();

    constructor(
        private eventsSrv: AppEventsService,
        private ref: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.eventsSrv.httpRequestEvent$
            .pipe( takeUntil( this.unsubscribe$ ) )
            .subscribe( ( isDisplay: boolean ) => {
                if ( isDisplay ) {
                    this.changeDisplay( isDisplay );
                } else {
                    setTimeout( () => {
                        this.changeDisplay( isDisplay );
                    }, 1000);
                }
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    private changeDisplay( isDisplay: boolean ): void {
        this.displayLoader$.next( isDisplay );
        this.ref.detectChanges();
    }
}
