import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { APP_IMPORTS } from './../../../app.imports';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ APP_IMPORTS ],
            declarations: [ LoaderComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
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

    it('nativeElement has a div .loader__block-overlay', () => {
        expect(compiled.querySelector('div .loader__block-overlay')).toBeTruthy();
    });
    it('nativeElement has a div .loader__wrapper', () => {
        expect(compiled.querySelector('div .loader__wrapper')).toBeTruthy();
    });
    it('nativeElement has a div .loader', () => {
        expect(compiled.querySelector('div .loader')).toBeTruthy();
    });
    it('nativeElement has a div .loader__item', () => {
        expect(compiled.querySelector('div .loader__item')).toBeTruthy();
    });

    it('displayLoader$ testing', () => {
        expect(component.displayLoader$).toBeDefined();
        expect(typeof component.displayLoader$).toEqual('object');
        expect(component.displayLoader$).toBeInstanceOf(Subject);
    });
    it('changeDisplay() testing', () => {

        spyOn(component.displayLoader$, 'next');
        spyOn((component as any).ref, 'detectChanges');

        const value = true;

        (component as any).changeDisplay(value);

        expect(component.displayLoader$.next)
            .toHaveBeenCalled();
        expect(component.displayLoader$.next)
            .toHaveBeenCalledWith(value);
        expect((component as any).ref.detectChanges)
            .toHaveBeenCalled();
    });
});
