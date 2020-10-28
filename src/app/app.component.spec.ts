import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from './app.imports';
import { APP_DECLARATIONS } from './app.declarations';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
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

    it('nativeElement has a div .root-wrapper', () => {
        expect(compiled.querySelector('div .root-wrapper')).toBeTruthy();
    });
    it('nativeElement has a header .root-wrapper__header', () => {
        expect(compiled.querySelector('.root-wrapper__header')).toBeTruthy();
    });
    it('nativeElement has a section .root-wrapper__header-wrapper', () => {
        expect(compiled.querySelector('.root-wrapper__header-wrapper')).toBeTruthy();
    });
    it('nativeElement has a main .root-wrapper__main', () => {
        expect(compiled.querySelector('.root-wrapper__main')).toBeTruthy();
    });
    it('nativeElement has a section .root-wrapper__breadcrumps', () => {
        expect(compiled.querySelector('.root-wrapper__breadcrumps')).toBeTruthy();
    });
    it('nativeElement has a div .root-wrapper__breadcrumps-wrapper', () => {
        expect(compiled.querySelector('div .root-wrapper__breadcrumps-wrapper')).toBeTruthy();
    });
    it('nativeElement has a section .root-wrapper__content', () => {
        expect(compiled.querySelector('.root-wrapper__content')).toBeTruthy();
    });
    it('nativeElement has a div .root-wrapper__content-wrapper', () => {
        expect(compiled.querySelector('div .root-wrapper__content-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .root-wrapper__content-block', () => {
        expect(compiled.querySelector('div .root-wrapper__content-block')).toBeTruthy();
    });
    it('nativeElement has a footer .root-wrapper__footer', () => {
        expect(compiled.querySelector('.root-wrapper__footer')).toBeTruthy();
    });
    it('nativeElement has a section .root-wrapper__footer-wrapper', () => {
        expect(compiled.querySelector('.root-wrapper__footer-wrapper')).toBeTruthy();
    });

    it('title testing "agmp2020"', () => {
        expect(component.title).toBeDefined();
        expect(typeof component.title).toEqual('string');
        expect(component.title).toEqual('agmp2020');
    });
});
