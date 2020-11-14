import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { APP_DECLARATIONS } from '../../../../app.declarations';

import { modalDataStub } from '../../../../../test-stubs/modal.stub';

import { ConfirmModalComponent } from './confirm-modal.component';

describe('ConfirmModalComponent', () => {
    let component: ConfirmModalComponent;
    let fixture: ComponentFixture<ConfirmModalComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmModalComponent);
        component = fixture.componentInstance;
        component.data = modalDataStub;
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

    it('nativeElement has a div .confirmation-modal', () => {
        expect(compiled.querySelector('div .confirmation-modal')).toBeTruthy();
    });
    it('nativeElement has a div .confirmation-modal__block', () => {
        expect(compiled.querySelector('div .confirmation-modal__block')).toBeTruthy();
    });
    it('nativeElement has a div .confirmation-modal__header-wrapper', () => {
        expect(compiled.querySelector('div .confirmation-modal__header-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .confirmation-modal__header', () => {
        expect(compiled.querySelector('div .confirmation-modal__header')).toBeTruthy();
    });
    it('nativeElement has a h3 .confirmation-modal__title', () => {
        expect(compiled.querySelector('.confirmation-modal__title')).toBeTruthy();
    });
    it('nativeElement has a div .confirmation-modal__close', () => {
        expect(compiled.querySelector('.confirmation-modal__close')).toBeTruthy();
    });
    it('nativeElement has a div .confirmation-modal__close with event click cancel', () => {
        spyOn(component, 'handleCancel');

        const button: DebugElement = fixture.debugElement.query(By.css('.confirmation-modal__close'));
        button.triggerEventHandler('click', null);

        expect(component.handleCancel).toHaveBeenCalled();
    });
    it('nativeElement has a div .confirmation-modal__body-wrapper', () => {
        expect(compiled.querySelector('div .confirmation-modal__body-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .confirmation-modal__body', () => {
        expect(compiled.querySelector('div .confirmation-modal__body')).toBeTruthy();
    });
    it('nativeElement has a p .confirmation-modal__description', () => {
        expect(compiled.querySelector('.confirmation-modal__description')).toBeTruthy();
    });
    it('nativeElement has a div .confirmation-modal__footer-wrapper', () => {
        expect(compiled.querySelector('div .confirmation-modal__footer-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .confirmation-modal__footer', () => {
        expect(compiled.querySelector('div .confirmation-modal__footer')).toBeTruthy();
    });
    it('nativeElement has a button .button--primary', () => {
        expect(compiled.querySelector('.button--primary')).toBeTruthy();
    });
    it('nativeElement has a button .button--primary with event click ok', () => {
        spyOn(component, 'handleOk');

        const button: DebugElement = fixture.debugElement.query(By.css('.button--primary'));
        button.triggerEventHandler('click', null);

        expect(component.handleOk).toHaveBeenCalled();
    });
    it('nativeElement has a button .button--secondary', () => {
        expect(compiled.querySelector('.button--secondary')).toBeTruthy();
    });
    it('nativeElement has a button .button--secondary with event click cancel', () => {
        spyOn(component, 'handleCancel');

        const button: DebugElement = fixture.debugElement.query(By.css('.button--secondary'));
        button.triggerEventHandler('click', null);

        expect(component.handleCancel).toHaveBeenCalled();
    });
});
