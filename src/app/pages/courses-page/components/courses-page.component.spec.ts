import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { coursesDataStub } from '../../../../assets/dev-stubs/coursesData';

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
    it('nativeElement has a div .courses-page__action-bar', () => {
        expect(compiled.querySelector('div .courses-page__action-bar')).toBeTruthy();
    });
    it('nativeElement has a div .courses-page__action-bar--search', () => {
        expect(compiled.querySelector('.courses-page__action-bar--search')).toBeTruthy();
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
    it('nativeElement has a div .courses-page__load-more-block', () => {
        expect(compiled.querySelector('div .courses-page__load-more-block')).toBeTruthy();
    });
    it('nativeElement has a link .courses-page__load-more', () => {
        expect(compiled.querySelector('.courses-page__load-more')).toBeTruthy();
    });
    it('nativeElement has a link .courses-page__load-more with content', () => {
        expect(compiled.querySelector('.courses-page__load-more').textContent)
            .toContain('Load more');
    });
    it('nativeElement has a div .courses-page__load-more-block with event click', () => {
        spyOn(component, 'handleLoadMore');

        const button: DebugElement = fixture.debugElement
            .query(By.css('.courses-page__load-more-block'));
        button.triggerEventHandler('click', null);

        expect(component.handleLoadMore).toHaveBeenCalled();
    });

    it('coursesData testing', () => {
        expect(component.coursesData).toBeDefined();
        expect(typeof component.coursesData).toEqual('object');
        expect(component.coursesData).toEqual(coursesDataStub);
    });
    it('ngOnInit() testing', () => {
        spyOn(window.console, 'log');

        const value = 'ngOnInit';
        component.coursesData = [];

        component.ngOnInit();

        expect(window.console.log).toHaveBeenCalled();
        expect(window.console.log).toHaveBeenCalledWith(value);
        expect(component.coursesData).toEqual(coursesDataStub);
    });
    it('deleteCourse() calls console.log', () => {
        spyOn(window.console, 'log');

        const value = 'test';

        component.deleteCourse(value);

        expect(window.console.log).toHaveBeenCalled();
        expect(window.console.log).toHaveBeenCalledWith(value);
    });
    it('handleLoadMore() calls console.log', () => {
        spyOn(window.console, 'log');

        const value = 'Load more';

        component.handleLoadMore();

        expect(window.console.log).toHaveBeenCalled();
        expect(window.console.log).toHaveBeenCalledWith(value);
    });
});
