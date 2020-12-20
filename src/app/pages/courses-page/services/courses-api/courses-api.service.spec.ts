import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../app.declarations';

import { apiCourseStub } from '../../../../../test-stubs/apiCourse.stub';

import { CoursesApiService } from './courses-api.service';
import { apiCoursesStub } from '../../../../../test-stubs/apicoursesData.stub';

describe('CoursesApiService', () => {
    let service: CoursesApiService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(CoursesApiService);
    });
    afterEach(() => {
        service = null;
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('load() testing not exists count', () => {

        const response = of(apiCoursesStub);

        spyOn((service as any).apiSrv, 'request').and.returnValue(response);

        const res = service.load();

        expect((service as any).apiSrv.request).toHaveBeenCalled();
        expect(res).toBeDefined();
        expect(res).toBeInstanceOf(Observable);
        expect(res).toEqual(response);
    });
    it('load() testing exists count', () => {

        const value = 1;
        const response = of([ apiCourseStub ]);

        spyOn((service as any).apiSrv, 'request').and.returnValue(response);

        const res = service.load(value);

        expect((service as any).apiSrv.request).toHaveBeenCalled();
        expect(res).toBeDefined();
        expect(res).toBeInstanceOf(Observable);
        expect(res).toEqual(response);
    });
    it('createItem() testing', () => {

        const course = apiCourseStub;
        const response = of({});

        spyOn((service as any).apiSrv, 'request').and.returnValue(response);

        const res = service.createItem(course);

        expect((service as any).apiSrv.request).toHaveBeenCalled();
        expect((service as any).apiSrv.request).toHaveBeenCalledWith('post', 'courses', course);
        expect(res).toBeDefined();
        expect(res).toBeInstanceOf(Observable);
        expect(res).toEqual(response);
    });
    it('removeItem() testing', () => {

        const id = 1;
        const response = of({});

        spyOn((service as any).apiSrv, 'request').and.returnValue(response);

        const res = service.removeItem(id);

        expect((service as any).apiSrv.request).toHaveBeenCalled();
        expect((service as any).apiSrv.request).toHaveBeenCalledWith('delete', `courses/${ id }`);
        expect(res).toBeDefined();
        expect(res).toBeInstanceOf(Observable);
        expect(res).toEqual(response);
    });
    it('updateItem() testing', () => {

        const course = apiCourseStub;
        const response = of(apiCourseStub);

        spyOn((service as any).apiSrv, 'request').and.returnValue(response);

        const res = service.updateItem(course);

        expect((service as any).apiSrv.request).toHaveBeenCalled();
        expect((service as any).apiSrv.request)
            .toHaveBeenCalledWith('patch', `courses/${ course.id }`, course);
        expect(res).toBeDefined();
        expect(res).toBeInstanceOf(Observable);
        expect(res).toEqual(response);
    });
    it('getItemById() testing', () => {

        const id = 1;
        const response = of(apiCourseStub);

        spyOn((service as any).apiSrv, 'request').and.returnValue(response);

        const res = service.getItemById(id);

        expect((service as any).apiSrv.request).toHaveBeenCalled();
        expect((service as any).apiSrv.request).toHaveBeenCalledWith('get', `courses/${ id }`);
        expect(res).toBeDefined();
        expect(res).toBeInstanceOf(Observable);
        expect(res).toEqual(response);
    });
});
