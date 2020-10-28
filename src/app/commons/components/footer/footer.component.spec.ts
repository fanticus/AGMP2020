import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../../app.declarations';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
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

    it('nativeElement has a div .footer', () => {
        expect(compiled.querySelector('div .footer')).toBeTruthy();
    });
    it('nativeElement has a div .footer__copy-rights', () => {
        expect(compiled.querySelector('.footer__copy-rights')).toBeTruthy();
    });
});
