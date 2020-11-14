import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../app.declarations';

@Component({
    template: '<ng-template appModalHost></ng-template>'
})
class TestModalHostComponent {}

describe('ModalHostDirective', () => {
    let component: TestModalHostComponent;
    let fixture: ComponentFixture<TestModalHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                APP_DECLARATIONS,
                TestModalHostComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestModalHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    it('should be readly initialized', () => {
        expect(fixture).toBeDefined();
        expect(component).toBeDefined();
    });
});
