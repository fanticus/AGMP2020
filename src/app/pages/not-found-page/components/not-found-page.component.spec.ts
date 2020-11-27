import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_IMPORTS } from '../../../app.imports';
import { APP_DECLARATIONS } from '../../../app.declarations';

import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
    let component: NotFoundPageComponent;
    let fixture: ComponentFixture<NotFoundPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NotFoundPageComponent);
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

    it('nativeElement has a div .not-found-page', () => {
        expect(compiled.querySelector('.not-found-page')).toBeTruthy();
    });
    it('nativeElement has a div .not-found-page__block', () => {
        expect(compiled.querySelector('.not-found-page__block')).toBeTruthy();
    });
});
