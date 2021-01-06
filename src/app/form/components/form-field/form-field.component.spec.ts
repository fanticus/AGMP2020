import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../../app.declarations';

import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
    let component: FormFieldComponent;
    let fixture: ComponentFixture<FormFieldComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormFieldComponent);
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
});
