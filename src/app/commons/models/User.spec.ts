import { TestBed } from '@angular/core/testing';

import { APP_DECLARATIONS } from '../../app.declarations';

import { User } from './User';

describe('User', () => {
    let component: User;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        component = new User();
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
    it('firstName testing', () => {
        expect(component.firstName).toBeUndefined();
    });
    it('lastName testing', () => {
        expect(component.lastName).toBeUndefined();
    });
});
