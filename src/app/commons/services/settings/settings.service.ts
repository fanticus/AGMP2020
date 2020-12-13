import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    private settings$: BehaviorSubject<any>;
    private settings = {};

    constructor() {
        this.getSettings$();
    }

    public getSettings$(): Observable<any> {
        if ( !this.settings$ ) {
          this.settings$ = new BehaviorSubject( null );
          this.loadSettings();
        }
        return this.settings$.asObservable().pipe( filter( data => data !== null ) );
    }

    public get( prop: string ): string {
        return this.settings.hasOwnProperty( prop )
            ? this.settings[ prop ]
            : null;
    }

    public getUrl( property: string, settings: any ): string {
        return `${ settings[ 'api' ] }${
            settings.hasOwnProperty( property )
                ? settings[ property ]
                : property }`;
    }

    private loadSettings(): void {
        this.settings = environment.settings;
        this.settings$.next( environment.settings );
    }
}
