import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../../app.declarations';
import { APP_IMPORTS } from '../../../app.imports';

import { FormErrorComponent } from './form-error.component';

describe('FormErrorComponent', () => {
    let component: FormErrorComponent;
    let fixture: ComponentFixture<FormErrorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
