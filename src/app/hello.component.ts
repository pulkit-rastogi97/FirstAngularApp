import { Component, Input } from '@angular/core';

@Component(
{
    selector : "hello",
    template : '<h2>{{name}}&nbsp;{{msg}}</h2>',
})

export class HelloComponent
{
    name : string;

    @Input()
    msg : string;

    constructor()
    {
        this.name = "Priya";
    }
}