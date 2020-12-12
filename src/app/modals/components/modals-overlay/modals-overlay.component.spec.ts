import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { APP_DECLARATIONS } from '../../../app.declarations';

import { modalDataStub } from '../../../../test-stubs/modal.stub';

import { ConfirmModalComponent } from '../modal-types/confirm-modal/confirm-modal.component';

import { ModalsOverlayComponent } from './modals-overlay.component';

describe('ModalsOverlayComponent', () => {
    let component: ModalsOverlayComponent;
    let fixture: ComponentFixture<ModalsOverlayComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ APP_DECLARATIONS ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalsOverlayComponent);
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

    it('displayOverlay$ testing', () => {
        expect(component.displayOverlay$).toBeDefined();
        expect(typeof component.displayOverlay$).toEqual('object');
        expect(component.displayOverlay$).toBeInstanceOf(Subject);
    });

    // it('hideOverlay testing', () => {
    //     spyOn((component as any).modalHost.viewContainerRef, 'clear');

    //     (component as any).hideOverlay();

    //     expect((component as any).modalHost.viewContainerRef.clear)
    //         .toHaveBeenCalled();
    // });

    // it('loadModal testing', () => {
    //     let modelStub = modalDataStub;
    //     modelStub.displayComponent = ConfirmModalComponent;

    //     spyOn((component as any).componentFactoryResolver, 'resolveComponentFactory')
    //         .and.callThrough();
    //     spyOn((component as any).modalHost.viewContainerRef, 'clear')
    //         .and.callThrough();
    //     spyOn((component as any).modalHost.viewContainerRef, 'createComponent')
    //         .and.callThrough();

    //     (component as any).loadModal(modelStub);

    //     expect((component as any).componentFactoryResolver.resolveComponentFactory)
    //         .toHaveBeenCalled();
    //     expect((component as any).modalHost.viewContainerRef.clear)
    //         .toHaveBeenCalled();
    //     expect((component as any).modalHost.viewContainerRef.createComponent)
    //         .toHaveBeenCalled();
    // });
});
