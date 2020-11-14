import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { IModalResponse } from '../../../modals/interfaces/ModalInterface';
import { ICourse } from '../../../commons/interfaces/ApiDataInterface';

import { coursesDataStub } from '../../../../test-stubs/coursesData.stub';
import { courseStub } from '../../../../test-stubs/course.stub';

import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
    let component: CoursesPageComponent;
    let fixture: ComponentFixture<CoursesPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesPageComponent);
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

    it('nativeElement has a div .courses-page', () => {
        expect(compiled.querySelector('div .courses-page')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__action-bar-wrapper', () => {
        expect(compiled.querySelector('div .courses-page__action-bar-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__action-bar', () => {
        expect(compiled.querySelector('div .courses-page__action-bar')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__action-bar--search', () => {
        expect(compiled.querySelector('.courses-page__action-bar--search')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__actions-wrapper', () => {
        expect(compiled.querySelector('div .courses-page__actions-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__actions', () => {
        expect(compiled.querySelector('div .courses-page__actions')).toBeTruthy();
    });
    it('nativeElement has a link .courses-page__button', () => {
        expect(compiled.querySelector('.courses-page__button')).toBeTruthy();
    });
    it('nativeElement has a link .courses-page__button with content', () => {
        expect(compiled.querySelector('.courses-page__button').textContent)
            .toContain('Add course');
    });
    it('nativeElement has a div .courses-page__list-wrapper', () => {
        expect(compiled.querySelector('div .courses-page__list-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__list', () => {
        expect(compiled.querySelector('div .courses-page__list')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__list-item', () => {
        expect(compiled.querySelector('.courses-page__list-item')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__load-more-wrapper', () => {
        expect(compiled.querySelector('div .courses-page__load-more-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__load-more-wrapper with event click', () => {
        spyOn(component, 'handleLoadMore');

        const button: DebugElement = fixture.debugElement
            .query(By.css('.courses-page__load-more-wrapper'));
        button.triggerEventHandler('click', null);

        expect(component.handleLoadMore).toHaveBeenCalled();
    });
    it('nativeElement has a div .courses-page__load-more', () => {
        expect(compiled.querySelector('div .courses-page__load-more')).toBeTruthy();
    });
    it('nativeElement has a link', () => {
        expect(compiled.querySelector('.link')).toBeTruthy();
    });
    it('nativeElement has a link with content', () => {
        expect(compiled.querySelector('.link').textContent)
            .toContain('Load more');
    });
    // it('nativeElement has a div .courses-page__not-data-wrapper', () => {
    //     expect(compiled.querySelector('div .courses-page__not-data-wrapper')).toBeTruthy();
    // });
    // it('nativeElement has a div .courses-page__not-data', () => {
    //     expect(compiled.querySelector('div .courses-page__not-data')).toBeTruthy();
    // });
    // it('nativeElement has a h3 .courses-page__not-data--title', () => {
    //     expect(compiled.querySelector('div .courses-page__not-data--title')).toBeTruthy();
    // });
    // it('nativeElement has a h3 .courses-page__not-data--title with content', () => {
    //     expect(compiled.querySelector('.courses-page__not-data--title').textContent)
    //         .toContain('No data');
    // });
    // it('nativeElement has a span .courses-page__not-data--description', () => {
    //     expect(compiled.querySelector('div .courses-page__not-data--description')).toBeTruthy();
    // });
    // it('nativeElement has a span .courses-page__not-data--description with content', () => {
    //     expect(compiled.querySelector('.courses-page__not-data--description').textContent)
    //         .toContain('Feel free to add new course');
    // });

    it('coursesData testing', () => {
        expect(component.coursesData).toBeDefined();
        expect(typeof component.coursesData).toEqual('object');
        expect(component.coursesData).toEqual(coursesDataStub);
    });
    it('ngOnInit() testing', () => {
        spyOn(component as any, 'getCourses');

        component.ngOnInit();

        expect((component as any).getCourses).toHaveBeenCalled();
    });
    it('deleteCourse() testing status true', () => {
        const res: IModalResponse = {
            status: true
        };
        spyOn((component as any).modalsSrv, 'showModal')
            .and.returnValue(of(res));
        spyOn((component as any).courseSrv, 'removeCourse');
        spyOn((component as any), 'getCourses');

        const value = courseStub;

        component.deleteCourse(value);

        expect((component as any).modalsSrv.showModal).toHaveBeenCalled();
        expect((component as any).courseSrv.removeCourse).toHaveBeenCalled();
        expect((component as any).courseSrv.removeCourse)
            .toHaveBeenCalledWith(value.id);
        expect((component as any).getCourses).toHaveBeenCalled();
    });
    it('deleteCourse() testing status false', () => {
        const res: IModalResponse = {
            status: false
        };
        spyOn((component as any).modalsSrv, 'showModal')
            .and.returnValue(of(res));
        spyOn((component as any).courseSrv, 'removeCourse');
        spyOn((component as any), 'getCourses');

        const value = courseStub;

        component.deleteCourse(value);

        expect((component as any).modalsSrv.showModal).toHaveBeenCalled();
        expect((component as any).courseSrv.removeCourse).not.toHaveBeenCalled();
        expect((component as any).getCourses).not.toHaveBeenCalled();
    });
    it('handleLoadMore() calls console.log', () => {
        spyOn(window.console, 'log');

        const value = 'Load more';

        component.handleLoadMore();

        expect(window.console.log).toHaveBeenCalled();
        expect(window.console.log).toHaveBeenCalledWith(value);
    });
    it('filterCourses() testing not exists filter', () => {
        component.coursesData = coursesDataStub;
        spyOn((component as any).filterPipe, 'transform')
            .and.returnValue(component.coursesData);

        const value = '';

        component.filterCourses(value);

        expect((component as any).filter).toEqual(value);
        expect((component as any).filterPipe.transform).toHaveBeenCalled();
        expect((component as any).filterPipe.transform)
            .toHaveBeenCalledWith(component.coursesData, value);
        expect(component.coursesList).toBeDefined();
        expect(typeof component.coursesList).toEqual('object');
        expect(component.coursesList).toEqual(component.coursesData);
    });
    it('filterCourses() testing exists filter', () => {
        component.coursesData = coursesDataStub;
        spyOn((component as any).filterPipe, 'transform')
            .and.returnValue([]);

        const value = 'test';

        component.filterCourses(value);

        expect((component as any).filter).toEqual(value);
        expect((component as any).filterPipe.transform).toHaveBeenCalled();
        expect((component as any).filterPipe.transform)
            .toHaveBeenCalledWith(component.coursesData, value);
        expect(component.coursesList).toBeDefined();
        expect(typeof component.coursesList).toEqual('object');
        expect(component.coursesList).toEqual([]);
    });
    it('getCourses() testing not exists filter', () => {
        const res: ICourse[] = coursesDataStub;
        spyOn((component as any).courseSrv, 'getCourses')
            .and.returnValue(of(res));

        spyOn(component, 'filterCourses');

        (component as any).getCourses();

        expect((component as any).courseSrv.getCourses).toHaveBeenCalled();
        expect(component.coursesData).toEqual(res);
        expect((component as any).filter).toBeUndefined();
        expect(component.filterCourses).not.toHaveBeenCalled();
        expect(component.coursesList).toEqual(res);
    });
    it('getCourses() testing exists filter', () => {
        const res: ICourse[] = coursesDataStub;
        spyOn((component as any).courseSrv, 'getCourses')
            .and.returnValue(of(res));

        (component as any).filter = 'test';

        spyOn(component, 'filterCourses');

        (component as any).getCourses();

        expect((component as any).courseSrv.getCourses).toHaveBeenCalled();
        expect(component.coursesData).toEqual(res);
        expect((component as any).filter).toBeTruthy();
        expect(component.filterCourses).toHaveBeenCalled();
        expect(component.filterCourses)
            .toHaveBeenCalledWith((component as any).filter);
    });
});
