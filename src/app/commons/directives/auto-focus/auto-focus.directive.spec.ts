import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

@Component({
    template: '<div [appAutoFocus]></div>'
})
class TestComponent {}

describe('AutoFocusDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [
                APP_DECLARATIONS,
                TestComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
