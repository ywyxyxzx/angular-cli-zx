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
import { DomPortalOutlet, TemplatePortal, ComponentPortal, PortalInjector } from "@angular/cdk/portal";
import { DOCUMENT} from '@angular/common';
let DATA = new InjectionToken<any>('Sharing Data with Component Portal');
@Component({
  selector: 'portal-dialog-sharing-data',
  template: `
    <p>Component Portal Sharing Data is: {{data}}<p>
  `
})
export class DialogComponentWithSharingData {
  constructor(@Inject(DATA) public data: any) {} 
}


@Component({
  selector: 'app-out-share-componet',
  template: `
    <h2>Open a ComponentPortal Outside Angular Context with Sharing Data</h2>
    <button (click)="openComponentPortalOutSideAngularContextWithSharingData()">Open a ComponentPortal Outside Angular Context with Sharing Data</button>
    <input [value]="sharingComponentData" (change)="setComponentSharingData($event.target.value)"/>
  `
})
export class OutShareComponetComponent {
  _appRef: ApplicationRef;
  sharingComponentData: string = 'lx1036';
  constructor(
    @Inject(DOCUMENT) private _document,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector
  ) {}
  
  setComponentSharingData(value) {
    this.sharingComponentData = value;
  }
  openComponentPortalOutSideAngularContextWithSharingData() {
    let container = this._document.createElement('div');
    container.classList.add('component-portal-with-sharing-data');
    container = this._document.body.appendChild(container);
  
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }
  
    // Sharing data by Injector(Dependency Injection)
    const map = new WeakMap();
    map.set(DATA, this.sharingComponentData); // <--- key point
    const injector = new PortalInjector(this._injector, map);
  
    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(container, this._componentFactoryResolver, this._appRef, injector); // <--- key point
    // instantiate a ComponentPortal<DialogComponentWithSharingData>
    const componentPortal = new ComponentPortal(DialogComponentWithSharingData);
    // attach a ComponentPortal to a DomPortalOutlet
    portalOutlet.attach(componentPortal);
  }
}