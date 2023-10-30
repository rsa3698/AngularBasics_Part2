import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoggingService } from '../services/logging.serviice';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation : ViewEncapsulation.None,
  providers:[LoggingService]
})
export class UsersComponent implements OnInit {
  @ViewChild('paragraphUserName') paragraphUserName :ElementRef;
  name: string = 'Raudra Name'
  userName: string = '';
  value =10;
  usersList = ['Raudra'];
  constructor(private loggingService : LoggingService){
    console.log('Constructor USERS called')
   
  }

  ngOnInit(){
    console.log('On Init USERS Called')
  }



  onUserAdded(event:string){
    this.usersList.push(event)
  }

  onNameChanged(){
    this.name = 'Raudra Updated name'
    console.log(this.paragraphUserName.nativeElement.innerText)
    
    this.loggingService.logToConsole('Called from Service' +this.name);
  }

  onDelete(){
    this.usersList=[];
  }
}
