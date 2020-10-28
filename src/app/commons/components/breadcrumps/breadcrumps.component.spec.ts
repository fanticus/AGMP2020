import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../../app.declarations';

import { BreadcrumpsComponent } from './breadcrumps.component';

describe('BreadcrumpsComponent', () => {
    let component: BreadcrumpsComponent;
    let fixture: ComponentFixture<BreadcrumpsComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadcrumpsComponent);
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

    it('nativeElement has a div .breadcrumps', () => {
        expect(compiled.querySelector('div .breadcrumps')).toBeTruthy();
    });
    it('nativeElement has a nav .breadcrumps__list', () => {
        expect(compiled.querySelector('.breadcrumps__list')).toBeTruthy();
    });
    it('nativeElement has a link .breadcrumps__link', () => {
        expect(compiled.querySelector('.breadcrumps__link')).toBeTruthy();
    });
    it('nativeElement has a link .breadcrumps__link with content', () => {
        expect(compiled.querySelector('.breadcrumps__link').textContent)
            .toContain('courses');
    });
});
