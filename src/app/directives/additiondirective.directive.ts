import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAdditiondirective]'
})
export class AdditiondirectiveDirective {

  constructor(
    private el:ElementRef<HTMLDivElement>
  ) {
    this.el.nativeElement.innerText="Test"
   }

}
