import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../../../app.declarations';

import { CourseFormComponent } from './course-form.component';

import { ICourse } from '../../../../courses/interfaces/CourseInterface';

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

    // it('course testing', () => {
    //     expect(component.course).toBeDefined();
    //     expect(typeof component.course).toEqual('object');
    // });
    // it('titleForm testing', () => {
    //     expect(component.titleForm).toBeDefined();
    //     expect(typeof component.titleForm).toEqual('string');
    // });
    // it('handleSave() testing not exists courseId', () => {

    //     spyOn((component as any).coursesSrv, 'updateItem');
    //     spyOn((component as any).coursesSrv, 'create');

    //     component.handleSave();

    //     expect((component as any).coursesSrv.updateItem).not.toHaveBeenCalled();
    //     expect((component as any).coursesSrv.create).toHaveBeenCalled();
    // });
    // it('handleSave() testing exists courseId', () => {

    //     spyOn((component as any).coursesSrv, 'updateItem');
    //     spyOn((component as any).coursesSrv, 'create');

    //     (component as any).courseId = 'test';

    //     component.handleSave();

    //     expect((component as any).coursesSrv.updateItem).toHaveBeenCalled();
    //     expect((component as any).coursesSrv.create).not.toHaveBeenCalled();
    // });
    // it('getTitle() testing no exists id', () => {

    //     const value = '';
    //     const result = 'New course';

    //     component.titleForm = '';

    //     (component as any).getTitle(value);

    //     expect(component.titleForm).toBeDefined();
    //     expect(typeof component.titleForm).toEqual('string');
    //     expect(component.titleForm).toEqual(result);
    // });
    // it('getTitle() testing exists id', () => {

    //     const value = 'test';
    //     const result = 'Edit course';

    //     component.titleForm = '';

    //     (component as any).getTitle(value);

    //     expect(component.titleForm).toBeDefined();
    //     expect(typeof component.titleForm).toEqual('string');
    //     expect(component.titleForm).toEqual(result);
    // });
    // it('createCourse testing', () => {

    //     const value: ICourse = {
    //         id: null,
    //         title: '',
    //         creationDate: null,
    //         duration: null,
    //         description: '',
    //         topRated: false,
    //         authors: []
    //     };

    //     const res = (component as any).createCourse();

    //     expect(res).toBeDefined();
    //     expect(typeof res).toEqual('object');
    //     expect(res).toEqual(value);
    // });
});
