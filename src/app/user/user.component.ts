import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit ,OnChanges ,DoCheck ,AfterContentInit ,AfterContentChecked ,AfterViewInit, AfterViewChecked ,OnDestroy {
//  @Input() userName: string;
//Option 1;
 @Input('user') userName: string;
 @Input() name: string;
 @ContentChild('paragraphUserName') paragraphUserName:ElementRef
 constructor(){
   console.log('Constructor user called');
 }

 ngOnInit(){
  console.log('ngOnInit user called')
 
 }

 ngOnChanges(element : SimpleChanges){
  console.log('On Changes user Called')
  console.log(element);
}

ngDoCheck(){
  console.log('Do Check user Called')
}

ngAfterContentInit(){
  console.log('ngAfterContentInit user Called')
  console.log(this.paragraphUserName.nativeElement.innerText);
}
ngAfterContentChecked() {
  console.log('ngAfterContentChecked user Called')
}

ngAfterViewInit(){
  console.log('ngAfterViewInit user Called')
}

ngAfterViewChecked(){
  console.log('ngAfterViewChecked user Called')
}

ngOnDestroy() {
  console.log('Destroy user called')
}

}