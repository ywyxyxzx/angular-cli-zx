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

@Component({
  selector: 'app-outer-share',
  template: `
    <h2>Open a TemplatePortal Outside Angular Context with Sharing Data</h2>
    <button (click)="openTemplatePortalOutSideAngularContextWithSharingData()">Open a TemplatePortal Outside Angular Context with Sharing Data</button>
    <input [value]="sharingTemplateData" (change)="setTemplateSharingData($event.target.value)"/>
    <ng-template #_templatePortalOutsideAngularContextWithSharingData let-name="name">
      <p>Template Portal Outside Angular Context, the Sharing Data is {{name}}</p>
    </ng-template>
  `,
})
export class OuterShareComponent {
  _appRef: ApplicationRef;
  sharingTemplateData: string = 'lx1035';
  @ViewChild('_templatePortalOutsideAngularContextWithSharingData', {read: TemplateRef}) _templateWithSharingData: TemplateRef<any>;
  @ViewChild('_templatePortalOutsideAngularContextWithSharingData', {read: ViewContainerRef}) _viewContainerRefWithSharingData: ViewContainerRef;
  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    @Inject(DOCUMENT) private _document) {}

  setTemplateSharingData(value) {
    this.sharingTemplateData = value;
  }
  openTemplatePortalOutSideAngularContextWithSharingData() {
    let container = this._document.createElement('div');
    container.classList.add('template-portal-with-sharing-data');
    container = this._document.body.appendChild(container);
  
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }
  
    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(container, this._componentFactoryResolver, this._appRef, this._injector);
    // instantiate a TemplatePortal<DialogComponentWithSharingData>
    const templatePortal = new TemplatePortal(this._templateWithSharingData, this._viewContainerRefWithSharingData, {name: this.sharingTemplateData}); // <--- key point
    // attach a TemplatePortal to a DomPortalOutlet
    portalOutlet.attach(templatePortal);
  }
}
