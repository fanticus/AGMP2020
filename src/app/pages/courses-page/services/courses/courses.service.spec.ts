import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { APP_IMPORTS } from '../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../app.declarations';

import { courseStub } from '../../../../../test-stubs/course.stub';

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

    it('create() testing', () => {

        const course = courseStub;

        spyOn((service as any).utilitiesSrv, 'convertCourse');
        spyOn((service as any).coursesApiSrv, 'updateItem');

        service.create(course);

        expect((service as any).utilitiesSrv.convertCourse).toHaveBeenCalled();
        expect((service as any).utilitiesSrv.convertCourse).toHaveBeenCalledWith(course);
    });
});
