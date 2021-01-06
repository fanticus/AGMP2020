import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../app.declarations';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
    let component: InputFieldComponent;
    let fixture: ComponentFixture<InputFieldComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InputFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
