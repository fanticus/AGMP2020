import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import {
    ISettings,
    UrlsSettingsTypes,
    IUrlsSettings
} from '../../interfaces/SettingsInterface';

@Injectable()
export class SettingsService {

    private settings$: BehaviorSubject<ISettings>;
    private settings: ISettings = {};

    constructor() {
        this.loadSettings();
    }

    public isExistsSettings$(): Observable<boolean> {
        return this.settings$.asObservable().pipe(
            map( settings => !!settings )
        );
    }

    public get( prop: string ): any {
        return this.settings.hasOwnProperty( prop )
            ? this.settings[ prop ]
            : null;
    }

    public getUrl( value: string ): string {
        const urls: IUrlsSettings = this.settings.urls;
        if ( value ) {
            const properties = value.split( '/' );
            const url = properties.map( property => {
                return `${ urls.hasOwnProperty( property )
                    ? urls[ property ]
                    : property }`;
            });
            return url.join('/');
        }
        return `${ urls[ UrlsSettingsTypes.Api ] }`;
    }

    private loadSettings(): void {
        this.settings$ = new BehaviorSubject( null );
        this.settings = environment.settings;
        this.settings$.next( environment.settings );
    }
}
