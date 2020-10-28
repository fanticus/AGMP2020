import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../../../app.declarations';

import { CopyRightsComponent } from './copy-rights.component';

describe('CopyRightsComponent', () => {
    let component: CopyRightsComponent;
    let fixture: ComponentFixture<CopyRightsComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CopyRightsComponent);
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

    it('nativeElement has a span .copy-rights', () => {
        expect(compiled.querySelector('.copy-rights')).toBeTruthy();
    });
    it('nativeElement has a span with content', () => {
        expect(compiled.querySelector('span').textContent)
            .toContain('Copyright © Videocourses. All rights reserved');
    });
});
