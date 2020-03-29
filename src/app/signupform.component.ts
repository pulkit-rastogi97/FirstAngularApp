import {Component} from '@angular/core';


//for template driven forms we needs forms module
@Component({
    selector : 'signup',
    templateUrl :'signupform.component.html',
    styles : [`
    
    p{
        color:red;
        font-size: xx-large;
    }

    input.ng-valid{
        border-left:solid 7px green;
    }

    input.ng-invalid{
        border-left:solid 7px red;
    }

    input.ng-pristine{
        background: peachpuff;
    }

    input.ng-dirty
    {
        background: purple;
        color: whote;
    }
    `]
})

export class SignUpFormComponent
{
    user = {
        name : 'Sachin',
        phone : 9876543210,
        address : 'India',
        email : 'Sachin@cricket.com',
    }

    constructor(){

    }

    postForm(value:any){
        alert('Form Submitted ! '+
        JSON.stringify(this.user));
    }
}