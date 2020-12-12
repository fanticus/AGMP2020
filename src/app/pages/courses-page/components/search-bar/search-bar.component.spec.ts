import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

import { APP_IMPORTS } from '../../../../app.imports';
import { APP_DECLARATIONS } from '../../../../app.declarations';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ APP_DECLARATIONS ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBarComponent);
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

    it('nativeElement has a div .search-bar', () => {
        expect(compiled.querySelector('div .search-bar')).toBeTruthy();
    });
    it('nativeElement has a input .search-bar__input', () => {
        expect(compiled.querySelector('.search-bar__input')).toBeTruthy();
    });
    it('nativeElement has a input .search-bar__input with ngModel', () => {
        const input: HTMLInputElement = compiled.querySelector('.search-bar__input');

        expect(input.value).toEqual(component.searchValue);
    });
    it('nativeElement has a input .search-bar__input with placeholder', () => {
        const input: HTMLInputElement = compiled.querySelector('.search-bar__input');
        const value = 'Type to search';

        expect(input.placeholder).toEqual(value);
    });

    it('searchValue testing', () => {
        expect(component.searchValue).toBeDefined();
        expect(typeof component.searchValue).toEqual('string');
        expect(component.searchValue).toEqual('');
    });
    it('eventSearch testing', () => {
        expect((component as any).eventSearch).toBeDefined();
        expect((component as any).eventSearch).toBeInstanceOf(EventEmitter);
    });
});
