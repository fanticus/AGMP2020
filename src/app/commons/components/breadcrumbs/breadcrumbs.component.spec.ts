import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
    let component: BreadcrumbsComponent;
    let fixture: ComponentFixture<BreadcrumbsComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadcrumbsComponent);
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

    it('nativeElement has a div .breadcrumbs', () => {
        expect(compiled.querySelector('div .breadcrumbs')).toBeTruthy();
    });
    it('nativeElement has a nav .breadcrumbs__list', () => {
        expect(compiled.querySelector('.breadcrumbs__list')).toBeTruthy();
    });
    // it('nativeElement has a link .breadcrumbs__link', () => {
    //     expect(compiled.querySelector('.breadcrumbs__link')).toBeTruthy();
    // });
    // it('nativeElement has a link .breadcrumbs__link with content', () => {
    //     expect(compiled.querySelector('.breadcrumbs__link').textContent)
    //         .toContain('courses');
    // });
});
