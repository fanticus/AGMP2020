import {
    Component,
    OnInit,
    ComponentFactoryResolver,
    ViewChild,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    Type,
    OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
    IModal
} from '../../interfaces/ModalInterface';

import {
    AbstractModalComponent
} from '../modal-types/abstract-modal/abstract-modal.component';

import { ModalsService } from '../../services/modals/modals.service';

import { ModalHostDirective } from '../../directives/modal-host.directive';

@Component({
    selector: 'app-modals-overlay',
    templateUrl: './modals-overlay.component.html',
    styleUrls: ['./modals-overlay.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalsOverlayComponent implements OnInit, OnDestroy {

    public displayOverlay$ = new Subject<boolean>();

    private modalHost: ModalHostDirective;
    private modalData: IModal;

    private unsubscribe$ = new Subject<void>();

    @ViewChild ( ModalHostDirective, { static: false } )
    set content( content: ModalHostDirective ) {
        if ( content ) {
            this.modalHost = content;
            this.loadModal( this.modalData );
            this.ref.detectChanges();
        }
    }

    constructor(
        private ref: ChangeDetectorRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private modalsService: ModalsService
    ) { }

    ngOnInit() {
        this.modalsService.newModal$
          .pipe( takeUntil( this.unsubscribe$ ) )
          .subscribe( modal => {
              this.showOverlay( modal );
          });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    private showOverlay( res: IModal ): void {
        this.modalData = res;
        this.displayOverlay$.next( true );
    }

    private hideOverlay(): void {
        this.modalHost.viewContainerRef.clear();
        this.displayOverlay$.next( false );
    }

    private loadModal( modal: IModal ): void {
        if ( !modal.displayComponent ) {
            throw new Error( 'Component for modal display is not definded' );
        }
        const componentFactory = this.componentFactoryResolver
            .resolveComponentFactory( modal.displayComponent as Type<any> );
        const viewContainerRef = this.modalHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent( componentFactory );
        ( componentRef.instance as AbstractModalComponent ).data = modal;
        ( componentRef.instance as AbstractModalComponent )
            .hideOverlay = this.hideOverlay.bind( this );
    }
}
