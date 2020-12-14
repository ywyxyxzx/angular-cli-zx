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
  Inject,
  InjectionToken
} from '@angular/core';
import {DomPortalOutlet, TemplatePortal, ComponentPortal} from "@angular/cdk/portal";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'portal-dialog',
  template: `
    <p>Component Portal<p>
  `
})
export class DialogComponent {}

@Component({
  selector: 'app-portal-template',
  template: `
    <h2>Open a ComponentPortal Inside Angular Context</h2>
    <button (click)="openComponentPortalInsideAngularContext()">Open a ComponentPortal Inside Angular Context</button>
    <div #_openComponentPortalInsideAngularContext></div>

    <h2>Open a TemplatePortal Inside Angular Context</h2>
    <button (click)="openTemplatePortalInsideAngularContext()">Open a TemplatePortal Inside Angular Context</button>
    <div #_openTemplatePortalInsideAngularContext></div>
    
    <ng-template #_templatePortalInsideAngularContext>
      <p>Template Portal Inside Angular Context</p>
    </ng-template>
  `,
})
export class PortalTemplateComponent{
  private _appRef: ApplicationRef;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _injector: Injector,
              @Inject(DOCUMENT) private _document) {}

  @ViewChild('_openComponentPortalInsideAngularContext', {read: ViewContainerRef}) _openComponentPortalInsideAngularContext: ViewContainerRef;
  openComponentPortalInsideAngularContext() {
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }

    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(this._openComponentPortalInsideAngularContext.element.nativeElement, this._componentFactoryResolver, this._appRef, this._injector);
    // instantiate a ComponentPortal<DialogComponent>
    const componentPortal = new ComponentPortal(DialogComponent);
    // attach a ComponentPortal to a DomPortalOutlet
    portalOutlet.attach(componentPortal);
  }


  @ViewChild('_templatePortalInsideAngularContext', {read: TemplateRef}) _templatePortalInsideAngularContext: TemplateRef<any>;
  @ViewChild('_openTemplatePortalInsideAngularContext', {read: ViewContainerRef}) _openTemplatePortalInsideAngularContext: ViewContainerRef;
  openTemplatePortalInsideAngularContext() {
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }

    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(this._openTemplatePortalInsideAngularContext.element.nativeElement, this._componentFactoryResolver, this._appRef, this._injector);
    // instantiate a TemplatePortal<>
    const templatePortal = new TemplatePortal(this._templatePortalInsideAngularContext, this._openTemplatePortalInsideAngularContext);
    // attach a TemplatePortal to a DomPortalOutlet
    portalOutlet.attach(templatePortal);
  }
}