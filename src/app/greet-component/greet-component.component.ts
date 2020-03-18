import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet-component',
  templateUrl: './greet-component.component.html',
  styleUrls: ['./greet-component.component.css']
})
export class GreetComponentComponent {

  message : string;
  flag : Boolean;
  constructor() 
  { 
    this.message= "Greetings ! Welcome to Angular."
  }

  

}
