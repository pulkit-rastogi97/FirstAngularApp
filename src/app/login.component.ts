import {Component} from '@angular/core';

@Component({

    selector : 'login',
    templateUrl : 'login.component.html',
})

export class LoginComponent
{
    user = {
        username : 'admin',
        password : 'admin',
    }

    constructor(){}

    onSubmit(value : any) : void
    {
        alert(JSON.stringify(value));
    }
}

