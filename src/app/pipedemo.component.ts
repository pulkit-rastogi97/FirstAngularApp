import { Component, Pipe } from '@angular/core';


@Component({

    selector : 'pipe',
    template : `{{address}}<br>
    {{today}}<br>
    {{address | lowercase }}<br>
    {{address | uppercase}}<br>
    {{today | date : 'short'}}<br>
    {{today | date : 'medium'}}<br>
    {{today | date : 'long'}}<br>
    {{today | date : 'dd/MMM/yyyy'}}<br>
    {{today| date : 'format'}}<br>


    `,
})

export class PipeDemoComponent
{
    address : string;
    today : Date;

    constructor()
    {
        this.address = "Phase 1 Hinjawadi",
        this.today = new Date();
    }
}