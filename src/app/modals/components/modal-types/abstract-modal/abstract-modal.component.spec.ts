import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../../../app.declarations';

import { modalDataStub } from '../../../../../test-stubs/modal.stub';

import { AbstractModalComponent } from './abstract-modal.component';

@Component({
    selector: 'app-test-component',
    template: '<p>TestAbctractModalComponent</p>'
})
class TestComponent extends AbstractModalComponent {}

describe('AbstractModalComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                APP_DECLARATIONS,
                TestComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        component.data = modalDataStub;
        fixture.detectChanges();
    });
    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('results testing', () => {
        expect(component.results).toBeDefined();
        expect(typeof component.results).toEqual('object');
        expect(component.results).toEqual([]);
    });
    it('handleOk() testing', () => {
        spyOn(component.data.resultEvent, 'next');
        spyOn((component as any).eventsSrv.displayModalEvent$, 'next');

        component.handleOk();

        expect(component.data.resultEvent.next).toHaveBeenCalled();
        expect((component as any).eventsSrv.displayModalEvent$.next).toHaveBeenCalled();
    });
    it('handleCancel() testing', () => {
        spyOn(component.data.resultEvent, 'next');
        spyOn((component as any).eventsSrv.displayModalEvent$, 'next');

        component.handleCancel();

        expect(component.data.resultEvent.next).toHaveBeenCalled();
        expect((component as any).eventsSrv.displayModalEvent$.next).toHaveBeenCalled();
    });
});
