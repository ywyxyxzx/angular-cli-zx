import {
    ApplicationRef,
    Component,
    ComponentFactoryResolver,
    ElementRef,
    Injector,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    Inject
} from '@angular/core';
import { DomPortalOutlet, TemplatePortal, ComponentPortal } from "@angular/cdk/portal";
import { DOCUMENT } from '@angular/common';
import { DialogComponent} from './portal-template.component';

@Component({
    selector: 'outlet-element',
    template: `
      <h2>Open a ComponentPortal Outside Angular Context</h2>
      <button (click)="openComponentPortalOutSideAngularContext()">Open a ComponentPortal Outside Angular Context</button>
      
      <h2>Open a TemplatePortal Outside Angular Context</h2>
      <button (click)="openTemplatePortalOutSideAngularContext()">Open a TemplatePortal Outside Angular Context</button>
      <ng-template #_templatePortalOutsideAngularContext>
        <p>Template Portal Outside Angular Context</p>
      </ng-template>
    `,
})
export class OutletElementComponent {
    private _appRef: ApplicationRef;
    @ViewChild('_templatePortalOutsideAngularContext', { read: TemplateRef }) _template: TemplateRef<any>;
    @ViewChild('_templatePortalOutsideAngularContext', { read: ViewContainerRef }) _viewContainerRef: ViewContainerRef;
    constructor(private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector,
        @Inject(DOCUMENT) private _document) {}

    openComponentPortalOutSideAngularContext() {
        let container = this._document.createElement('div');
        container.classList.add('component-portal');
        container = this._document.body.appendChild(container);

        if (!this._appRef) {
            this._appRef = this._injector.get(ApplicationRef);
        }

        // instantiate a DomPortalOutlet
        const portalOutlet = new DomPortalOutlet(container, this._componentFactoryResolver, this._appRef, this._injector);
        // instantiate a ComponentPortal<DialogComponent>
        const componentPortal = new ComponentPortal(DialogComponent);
        // attach a ComponentPortal to a DomPortalOutlet
        portalOutlet.attach(componentPortal);
    }


    
    openTemplatePortalOutSideAngularContext() {
        let container = this._document.createElement('div');
        container.classList.add('template-portal');
        container = this._document.body.appendChild(container);

        if (!this._appRef) {
            this._appRef = this._injector.get(ApplicationRef);
        }

        // instantiate a DomPortalOutlet
        const portalOutlet = new DomPortalOutlet(container, this._componentFactoryResolver, this._appRef, this._injector);
        // instantiate a TemplatePortal<>
        const templatePortal = new TemplatePortal(this._template, this._viewContainerRef);
        // attach a TemplatePortal to a DomPortalOutlet
        portalOutlet.attach(templatePortal);
    }

}