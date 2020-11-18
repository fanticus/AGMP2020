import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { CoursePageComponent } from './course-page.component';

describe('CoursePageComponent', () => {
    let component: CoursePageComponent;
    let fixture: ComponentFixture<CoursePageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursePageComponent);
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

    it('nativeElement has a div .course-page', () => {
        expect(compiled.querySelector('.course-page')).toBeTruthy();
    });
    it('nativeElement has a div .course-page__block', () => {
        expect(compiled.querySelector('.course-page__block')).toBeTruthy();
    });
});
