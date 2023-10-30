import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  userName: string = '';
  @ViewChild('userInput') userInput :ElementRef;
  @Output() userAdded = new EventEmitter<string>();
  constructor(){

  }

  // onUserAdded(){
  //   this.userAdded.emit(this.userName);
  // }

  // onUserAdded(input: HTMLInputElement){
  //   this.userAdded.emit(input.value);
  // }

  onUserAdded(){
    this.userAdded.emit(this.userInput.nativeElement.value);
  }
}


