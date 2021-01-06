import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { APP_IMPORTS } from '../../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../../app.declarations';

import { courseStub } from '../../../../../../stubs/test-stubs/course.stub';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
    let service: CoursesService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(CoursesService);
    });
    afterEach(() => {
        service = null;
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('courseList$ testing', () => {
        expect(service.courseList$).toBeDefined();
        expect(typeof service.courseList$).toEqual('object');
        expect(service.courseList$).toBeInstanceOf(Subject);
    });
    it('load() testing', () => {

        const count = 1;

        spyOn((service as any).store, 'dispatch');

        service.load(count);

        expect((service as any).store.dispatch).toHaveBeenCalled();
    });
    it('loadSort() testing', () => {

        const search = 'test';
        const count = 1;

        spyOn((service as any).store, 'dispatch');

        service.loadSort(search, count);

        expect((service as any).store.dispatch).toHaveBeenCalled();
    });
    it('createItem() testing', () => {

        const course = courseStub;

        spyOn((service as any).store, 'dispatch');

        service.createItem(course);

        expect((service as any).store.dispatch).toHaveBeenCalled();
    });
    it('removeItem() testing', () => {

        const id = 1;

        spyOn((service as any).store, 'dispatch');

        service.removeItem(id);

        expect((service as any).store.dispatch).toHaveBeenCalled();
    });
    it('updateItem() testing', () => {

        const course = courseStub;

        spyOn((service as any).store, 'dispatch');

        service.updateItem(course);

        expect((service as any).store.dispatch).toHaveBeenCalled();
    });
    it('getItemById() testing', () => {

        const id = 1;

        spyOn((service as any).store, 'dispatch');

        service.getItemById(id);

        expect((service as any).store.dispatch).toHaveBeenCalled();
    });
    it('changeLoadMore() testing', () => {

        const value = {
            newCoursesLength: 1,
            oldCoursesLength: 1
        };

        spyOn((service as any).store, 'dispatch');

        service.changeLoadMore(value);

        expect((service as any).store.dispatch).toHaveBeenCalled();
    });
});
