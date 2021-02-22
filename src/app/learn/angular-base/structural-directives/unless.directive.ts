import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';



@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;
  constructor(private viewContainerRef :ViewContainerRef, private templateUrl: TemplateRef<any> ) { 

  }
  @Input() set appUnless(condition: boolean) {
    if(!condition && ! this.hasView ) {
      
      this.viewContainerRef.createEmbeddedView(this.templateUrl);
      this.hasView = true;
    }
    if(condition && this.hasView) {
      
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
  

}
