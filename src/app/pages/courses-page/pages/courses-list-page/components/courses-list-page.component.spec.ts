import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { APP_IMPORTS } from '../../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../../app.declarations';

import { CoursesListPageComponent } from './courses-list-page.component';

describe('CoursesListPageComponent', () => {
    let component: CoursesListPageComponent;
    let fixture: ComponentFixture<CoursesListPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListPageComponent);
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

    it('nativeElement has a div .courses-list-page', () => {
        expect(compiled.querySelector('div .courses-list-page')).toBeTruthy();
    });
    it('nativeElement has a div .courses-list-page__action-bar-wrapper', () => {
        expect(compiled.querySelector('div .courses-list-page__action-bar-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .courses-list-page__action-bar', () => {
        expect(compiled.querySelector('div .courses-list-page__action-bar')).toBeTruthy();
    });
    it('nativeElement has a div .courses-list-page__action-bar--search', () => {
        expect(compiled.querySelector('.courses-list-page__action-bar--search')).toBeTruthy();
    });
    it('nativeElement has a div .courses-list-page__actions-wrapper', () => {
        expect(compiled.querySelector('div .courses-list-page__actions-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .courses-list-page__actions', () => {
        expect(compiled.querySelector('div .courses-list-page__actions')).toBeTruthy();
    });
    it('nativeElement has a link .courses-list-page__button', () => {
        expect(compiled.querySelector('.courses-list-page__button')).toBeTruthy();
    });
    it('nativeElement has a link .courses-list-page__button with content', () => {
        expect(compiled.querySelector('.courses-list-page__button').textContent)
            .toContain('Add course');
    });
    // it('nativeElement has a div .courses-page__list-wrapper', () => {
    //     expect(compiled.querySelector('div .courses-page__list-wrapper')).toBeTruthy();
    // });
    // it('nativeElement has a div .courses-page__list', () => {
    //     expect(compiled.querySelector('div .courses-page__list')).toBeTruthy();
    // });
    // it('nativeElement has a div .courses-page__list-item', () => {
    //     expect(compiled.querySelector('.courses-page__list-item')).toBeTruthy();
    // });
    // it('nativeElement has a div .courses-page__load-more-wrapper', () => {
    //     expect(compiled.querySelector('div .courses-page__load-more-wrapper')).toBeTruthy();
    // });
    // it('nativeElement has a div .courses-page__load-more-wrapper with event click', () => {
    //     spyOn(component, 'handleLoadMore');

    //     const button: DebugElement = fixture.debugElement
    //         .query(By.css('.courses-page__load-more-wrapper'));
    //     button.triggerEventHandler('click', null);

    //     expect(component.handleLoadMore).toHaveBeenCalled();
    // });
    // it('nativeElement has a div .courses-page__load-more', () => {
    //     expect(compiled.querySelector('div .courses-page__load-more')).toBeTruthy();
    // });
    // it('nativeElement has a link', () => {
    //     expect(compiled.querySelector('.link')).toBeTruthy();
    // });
    // it('nativeElement has a link with content', () => {
    //     expect(compiled.querySelector('.link').textContent)
    //         .toContain('Load more');
    // });
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

    // it('coursesList testing', () => {
    //     expect(component.coursesList).toBeDefined();
    //     expect(typeof component.coursesList).toEqual('object');
    //     expect(component.coursesList).toEqual([]);
    // });
    // it('isDisplayLoadMore testing', () => {
    //     expect(component.isDisplayLoadMore).toBeDefined();
    //     expect(typeof component.isDisplayLoadMore).toEqual('boolean');
    //     expect(component.isDisplayLoadMore).toBeTrue();
    // });
    it('ngOnInit() testing', () => {
        spyOn(component, 'loadCourses');

        component.ngOnInit();

        expect((component as any).loadCourses).toHaveBeenCalled();
    });
    it('loadCourses() testing', () => {

        spyOn(component.coursesSrv, 'load');

        component.loadCourses();

        expect(component.coursesSrv.load).toHaveBeenCalled();
    });
    it('loadSortCourses() testing not exists value', () => {

        spyOn((component as any), 'clearSortValue');
        spyOn(component.coursesSrv, 'loadSort');

        component.loadSortCourses();

        expect((component as any).clearSortValue).not.toHaveBeenCalled();
        expect(component.coursesSrv.loadSort).not.toHaveBeenCalled();
    });
    it('loadSortCourses() testing exists value', () => {

        spyOn((component as any), 'clearSortValue');
        spyOn(component.coursesSrv, 'loadSort');

        const value = 'test';

        component.loadSortCourses(value);

        expect((component as any).clearSortValue).toHaveBeenCalled();
        expect(component.coursesSrv.loadSort).toHaveBeenCalled();
    });
    it('handleLoadMore() testing', () => {

        spyOn((component as any), 'updateCourses');

        component.handleLoadMore();

        expect((component as any).updateCourses).toHaveBeenCalled();
    });
    it('updateCourses() testing not exists sortValue', () => {

        (component as any).sortValue = '';

        spyOn(component, 'loadSortCourses');
        spyOn(component, 'loadCourses');

        (component as any).updateCourses();

        expect(component.loadSortCourses).not.toHaveBeenCalled();
        expect(component.loadCourses).toHaveBeenCalled();
    });
    it('updateCourses() testing exists sortValue', () => {

        (component as any).sortValue = 'test';

        spyOn(component, 'loadSortCourses');
        spyOn(component, 'loadCourses');

        (component as any).updateCourses();

        expect(component.loadSortCourses).toHaveBeenCalled();
        expect(component.loadCourses).not.toHaveBeenCalled();
    });
});
