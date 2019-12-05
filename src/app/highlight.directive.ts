import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elementRefVar: ElementRef) {
    elementRefVar.nativeElement.style.backgroundColor = 'blue';
   }

}