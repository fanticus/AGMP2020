import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../app.declarations';

import { CourseFormComponent } from './course-form.component';

import { ICourse } from '../../../../commons/interfaces/ApiDataInterface';

describe('CourseFormComponent', () => {
    let component: CourseFormComponent;
    let fixture: ComponentFixture<CourseFormComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseFormComponent);
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

    it('handleSave() calls console.log', () => {
        spyOn(window.console, 'log');

        const value = 'handleSave';

        component.handleSave();

        expect(window.console.log).toHaveBeenCalled();
        expect(window.console.log).toHaveBeenCalledWith(value);
    });
    it('getTitle() testing no exists id', () => {

        const value = 'create';
        const result = 'New course';

        component.titleForm = '';

        (component as any).getTitle(value);

        expect(component.titleForm).toBeDefined();
        expect(typeof component.titleForm).toEqual('string');
        expect(component.titleForm).toEqual(result);
    });
    it('getTitle() testing exists id', () => {

        const value = 'test';
        const result = 'Edit course';

        component.titleForm = '';

        (component as any).getTitle(value);

        expect(component.titleForm).toBeDefined();
        expect(typeof component.titleForm).toEqual('string');
        expect(component.titleForm).toEqual(result);
    });
    it('createCourse testing', () => {

        const value: ICourse = {
            id: null,
            title: '',
            creationDate: null,
            duration: null,
            description: '',
            topRated: false,
        };

        const res = (component as any).createCourse();

        expect(res).toBeDefined();
        expect(typeof res).toEqual('object');
        expect(res).toEqual(value);
    });
});
