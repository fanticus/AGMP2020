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
        spyOn(component, 'hideOverlay');

        component.handleOk();

        expect(component.hideOverlay).toHaveBeenCalled();
    });
    it('handleCancel() testing', () => {
        spyOn(component, 'hideOverlay');

        component.handleCancel();

        expect(component.hideOverlay).toHaveBeenCalled();
    });
});
