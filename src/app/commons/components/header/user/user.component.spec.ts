import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../app.declarations';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
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

    it('nativeElement has a div .user', () => {
        expect(compiled.querySelector('div .user')).toBeTruthy();
    });
    it('nativeElement has a span .user__user-login', () => {
        expect(compiled.querySelector('.user__user-login')).toBeTruthy();
    });
    it('nativeElement has a span with content', () => {
        expect(compiled.querySelector('span').textContent)
            .toContain(' ');
    });
    it('nativeElement has a button .user__button', () => {
        expect(compiled.querySelector('.user__button--logout')).toBeTruthy();
    });
    it('nativeElement has a button with content', () => {
        expect(compiled.querySelector('button').textContent)
            .toContain('Log out');
    });
});
