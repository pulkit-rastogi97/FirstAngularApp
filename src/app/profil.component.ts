import {Component,Output, Input, EventEmitter} from '@angular/core'

@Component({
    selector : "profile",
    template : `Profile Component {{profileName}} <br>
    <input type ="text" #inputNm [value]="profileName" [(ngModel)]="profileName" />
    <br>
    <br>
    <button (click)="updateName(inputNm.value)">Update Name</button>`
    
})

export class ProfileComponent
{
    @Input()
    profileName : string;

    @Output()
    update : EventEmitter<string> = new EventEmitter<string>();

    constructor()
    {
        this.profileName = "Nisha";
    }

    updateName(inputName : string)
    {
        this.update.emit(inputName);
    }


}