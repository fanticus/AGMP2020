import { TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../app.declarations';

import { Course } from './Course';

describe('Course', () => {
    let component: Course;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        component = new Course();
    });
    afterEach(() => {
        component = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('id testing', () => {
        expect(component.id).toBeUndefined();
    });
    it('title testing', () => {
        expect(component.title).toBeUndefined();
    });
    it('creationDate testing', () => {
        expect(component.creationDate).toBeUndefined();
    });
    it('duration testing', () => {
        expect(component.duration).toBeUndefined();
    });
    it('description testing', () => {
        expect(component.description).toBeUndefined();
    });
    it('topRated testing', () => {
        expect(component.topRated).toBeUndefined();
    });
});
