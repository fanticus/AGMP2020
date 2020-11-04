import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_PROVIDERS } from '../../../../app.providers';
import { APP_IMPORTS } from '../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../app.declarations';

@Component({
    template: '<div> {{ value | duration }}</div>'
})
export class TestHostComponent {
    value: number;
}

describe('DurationPipe', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [ APP_PROVIDERS ],
            imports: [ APP_IMPORTS ],
            declarations: [
                APP_DECLARATIONS,
                TestHostComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });
    afterEach(() => {
        fixture.destroy();
        compiled = null;
    });

    it('create an instance', () => {
        expect(testHost).toBeTruthy();
    });
});
