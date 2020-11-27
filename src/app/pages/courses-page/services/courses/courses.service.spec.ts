import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { courseStub } from '../../../../../test-stubs/course.stub';
import { coursesDataStub } from '../../../../../test-stubs/coursesData.stub';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
    let service: CoursesService;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CoursesService);
    });
    afterEach(() => {
        service = null;
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('getCourses() testing not exists courseList', () => {

        expect((service as any).courseList).toEqual([]);

        const value = coursesDataStub;
        const result = service.getCourses();

        expect(typeof (service as any).courseList).toEqual('object');
        expect((service as any).courseList).toEqual(value);
        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Observable);
        let res;
        result.subscribe( data => res = data );
        expect(res).toEqual(value);
    });
    it('getCourses() testing exists courseList', () => {

        const value = [ courseStub ];

        (service as any).courseList = value;

        const result = service.getCourses();

        expect(typeof (service as any).courseList).toEqual('object');
        expect((service as any).courseList).toEqual(value);
        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Observable);
        let res;
        result.subscribe( data => res = data );
        expect(res).toEqual(value);
    });
    it('getCourseById() testing exists id', () => {

        (service as any).courseList = coursesDataStub;

        const value = coursesDataStub[0];

        const res = service.getCourseById(value.id);

        expect(res).toBeDefined();
        expect(typeof res).toEqual('object');
        expect(res).toEqual(value);
    });
    it('getCourseById() testing not exists id', () => {

        (service as any).courseList = coursesDataStub;

        const value = '';
        const res = service.getCourseById(value);

        expect(res).toBeNull();
    });
    it('createCourse() testing', () => {

        spyOn((service as any), 'getIdCourse');

        (service as any).courseList = coursesDataStub;

        const value = courseStub;

        service.createCourse(value);

        expect((service as any).getIdCourse).toHaveBeenCalled();
        expect((service as any).courseList).not.toEqual(coursesDataStub);
    });
    it('removeCourse() testing exists id', () => {

        (service as any).courseList = [ ...coursesDataStub ];

        const value = coursesDataStub[0].id;
        const res = coursesDataStub.splice(1);

        service.removeCourse(value);

        expect((service as any).courseList).toBeDefined();
        expect(typeof (service as any).courseList).toEqual('object');
        expect((service as any).courseList).toEqual(res);
    });
    // it('removeCourse() testing not exists id', () => {

    //     (service as any).courseList = coursesDataStub;

    //     const value = '';
    //     service.removeCourse(value);

    //     expect((service as any).courseList).toEqual(coursesDataStub);
    //     expect((service as any).courseList.length).not.toEqual(coursesDataStub.length);
    // });
    // it('updateCourse() calls console.log', () => {

    //     (service as any).courseList = coursesDataStub;

    //     const value = courseStub;

    //     service.updateCourse(value);

    //     expect((service as any).courseList).toEqual(coursesDataStub);
    //     expect((service as any).courseList.length).toEqual(coursesDataStub.length);
    // });
});
