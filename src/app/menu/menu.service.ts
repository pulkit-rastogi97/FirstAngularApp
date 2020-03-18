import {Injectable} from "@angular/core";

@Injectable()
export class MenuService{

    menuItems : string[];

    constructor()
    {
        this.menuItems= ["Login","Products","Cart","Sign Up"];
    }
    getMenuItems() : string[]
    {
        return this.menuItems;
    }


}