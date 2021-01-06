import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../app.declarations';

import { LoginFormComponent } from './login-form.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
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

    it('nativeElement has a div .login-form', () => {
        expect(compiled.querySelector('div .login-form')).toBeTruthy();
    });
    it('nativeElement has a div .form__header', () => {
        expect(compiled.querySelector('div .form__header')).toBeTruthy();
    });
    it('nativeElement has a h2 .form__title', () => {
        expect(compiled.querySelector('.form__title')).toBeTruthy();
    });
    it('nativeElement has a div .form__body', () => {
        expect(compiled.querySelector('div .form__body')).toBeTruthy();
    });
    it('nativeElement has a div .login-form__footer', () => {
        expect(compiled.querySelector('div .login-form__footer')).toBeTruthy();
    });
    it('nativeElement has a link .link', () => {
        expect(compiled.querySelector('.link')).toBeTruthy();
    });
    it('nativeElement has a button .button--primary', () => {
        expect(compiled.querySelector('.button--primary')).toBeTruthy();
    });
    it('nativeElement has a button .button--primary with event click', () => {
        spyOn(component, 'handleLogin');

        const button: DebugElement = fixture.debugElement.query(By.css('.button--primary'));
        button.triggerEventHandler('click', null);

        expect(component.handleLogin).toHaveBeenCalled();
    });

    // it('handleLogin testing', () => {
    //     spyOn((component as any).authSrv, 'login');

    //     component.handleLogin();

    //     expect((component as any).authSrv.login)
    //         .toHaveBeenCalledWith('', '');
    //     expect((component as any).authSrv.login)
    //         .toHaveBeenCalled();
    // });
});
