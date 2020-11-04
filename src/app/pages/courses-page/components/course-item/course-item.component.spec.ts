import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

import { APP_PROVIDERS } from '../../../../app.providers';
import { APP_DECLARATIONS } from '../../../../app.declarations';

import { ICourse } from '../../../../commons/interfaces/ApiDataInterface';

import { courseStub } from '../../../../../test-stubs/course.stub';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [ APP_PROVIDERS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        component = fixture.componentInstance;
        component.courseItem = courseStub as ICourse;
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

    it('nativeElement has a article .course-item', () => {
        expect(compiled.querySelector('.course-item')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__block', () => {
        expect(compiled.querySelector('div .course-item__block')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__header-wrapper', () => {
        expect(compiled.querySelector('div .course-item__header-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__header', () => {
        expect(compiled.querySelector('div .course-item__header')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__title-wrapper', () => {
        expect(compiled.querySelector('div .course-item__title-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__title-block', () => {
        expect(compiled.querySelector('div .course-item__title-block')).toBeTruthy();
    });
    it('nativeElement has a h3 .course-item__title', () => {
        expect(compiled.querySelector('.course-item__title')).toBeTruthy();
    });
    // it('nativeElement has a h3 .course-item__title with content', () => {
    //     expect(compiled.querySelector('.course-item__title').textContent)
    //         .toContain(component.courseItem.title);
    // });
    it('nativeElement has a div .course-item__info-block-wrapper', () => {
        expect(compiled.querySelector('div .course-item__info-block-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__info-block', () => {
        expect(compiled.querySelector('div .course-item__info-block')).toBeTruthy();
    });
    it('nativeElement has a span .course-item__info--clock', () => {
        expect(compiled.querySelector('.course-item__info--clock')).toBeTruthy();
    });
    // it('nativeElement has a span .course-item__info--clock with content', () => {

    //     expect(compiled.querySelector('.course-item__info--clock').textContent)
    //         .toContain(component.courseItem.duration as string);
    // });
    it('nativeElement has a span .course-item__info--date', () => {
        expect(compiled.querySelector('.course-item__info--date')).toBeTruthy();
    });
    // it('nativeElement has a span .course-item__info--date with content', () => {
    //     expect(compiled.querySelector('.course-item__info--date').textContent)
    //         .toContain(component.courseItem.creationDate as string);
    // });
    it('nativeElement has a div .course-item__content', () => {
        expect(compiled.querySelector('div .course-item__content')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__description-wrapper', () => {
        expect(compiled.querySelector('div .course-item__description-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__description-block', () => {
        expect(compiled.querySelector('div .course-item__description-block')).toBeTruthy();
    });
    it('nativeElement has a p .course-item__description', () => {
        expect(compiled.querySelector('.course-item__description')).toBeTruthy();
    });
    it('nativeElement has a p .course-item__description with content', () => {
        expect(compiled.querySelector('.course-item__description').textContent)
            .toContain(component.courseItem.description);
    });
    it('nativeElement has a div .course-item__actions-wrapper', () => {
        expect(compiled.querySelector('div .course-item__actions-wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .course-item__actions', () => {
        expect(compiled.querySelector('div .course-item__actions')).toBeTruthy();
    });
    it('nativeElement has a link .course-item__button--edit', () => {
        expect(compiled.querySelector('.course-item__button--edit')).toBeTruthy();
    });
    it('nativeElement has a link .course-item__button--edit with content', () => {
        expect(compiled.querySelector('.course-item__button--edit').textContent)
            .toContain('edit');
    });
    it('nativeElement has a button .course-item__button--delete', () => {
        expect(compiled.querySelector('.course-item__button--delete')).toBeTruthy();
    });
    it('nativeElement has a button .course-item__button--delete with content', () => {
        expect(compiled.querySelector('.course-item__button--delete').textContent)
            .toContain('delete');
    });
    it('nativeElement has a button .course-item__button--delete with event click', () => {
        spyOn(component, 'handleDelete');

        const button: DebugElement = fixture.debugElement.query(By.css('.course-item__button--delete'));
        button.triggerEventHandler('click', null);

        expect(component.handleDelete).toHaveBeenCalled();
    });

    it('courseItem testing', () => {
        expect(component.courseItem).toBeDefined();
        expect(typeof component.courseItem).toEqual('object');
        expect(component.courseItem).toEqual(courseStub);
    });
    it('deleteCourse testing', () => {
        expect((component as any).deleteCourse).toBeDefined();
        expect((component as any).deleteCourse instanceof EventEmitter).toBeTruthy();
    });
    it('handleDelete() testing', () => {
        spyOn((component as any).deleteCourse, 'emit');

        component.handleDelete();

        expect((component as any).deleteCourse.emit).toHaveBeenCalled();
        expect((component as any).deleteCourse.emit)
            .toHaveBeenCalledWith(component.courseItem.id);
    });
});
