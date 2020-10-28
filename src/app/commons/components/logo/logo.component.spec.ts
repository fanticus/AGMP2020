import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../../app.declarations';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
    let component: LogoComponent;
    let fixture: ComponentFixture<LogoComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });
    afterEach(() => {
        fixture.destroy();
        component = null;
        compiled = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('nativeElement has a div .logo', () => {
        expect(compiled.querySelector('div .logo')).toBeTruthy();
    });
    it('nativeElement has a div .logo__image', () => {
        expect(compiled.querySelector('div .logo__image')).toBeTruthy();
    });
    it('nativeElement has a div .logo__title', () => {
        expect(compiled.querySelector('div .logo__title')).toBeTruthy();
    });
    it('nativeElement has a div .logo__title with content', () => {
        expect(compiled.querySelector('div .logo__title').textContent)
            .toContain('video course');
    });
});
