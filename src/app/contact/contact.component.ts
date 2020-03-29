import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Form } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  countries = ['USA', 'Germany', 'Italy', 'France'];

  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  contactForm: FormGroup;

  constructor() { 
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() : FormGroup
  {
    return new FormGroup({
      peronalData : new FormGroup({
        email : new FormControl(),
        mobile : new FormControl(),
        country : new FormControl()
      }),

      requestType : new FormControl(),
      text : new FormControl(),
    });
  }

  onSubmit(value : any) : void{
    alert("Form Submitted !! "+JSON.stringify(value));
  }

}
