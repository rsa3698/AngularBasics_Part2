import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective {

  @HostBinding('style.background-color') color:string;
  
  constructor(private element:ElementRef,private renderer: Renderer2) {
    // this.renderer.setStyle(
    //   this.element.nativeElement, 'background-color','green'
    // )
    this.color='green';
   }

   

   @HostListener('mouseenter') onmouseover (event: Event)
   {
    this.color ='blue';
   }

   @HostListener('mouseleave') onmouseleave (event: Event)
   {
   this.color ='yellow';
   }

   @HostListener('click') onclick (event: Event)
   {
    this.renderer.setStyle(
      this.element.nativeElement, 'background-color','pink'
    )
   }

}
