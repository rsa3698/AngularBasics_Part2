import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[appHighlightText]'
})

export class HighlightTextDirective{
    constructor(private element : ElementRef){

    }

    ngOnInit(){
        (this.element.nativeElement as HTMLElement).style.backgroundColor="red";
    }
}