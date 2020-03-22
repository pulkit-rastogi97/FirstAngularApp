import {Injectable} from "@angular/core";

@Injectable()
export class MenuService{

    menuItems : string[];

    constructor()
    {
        this.menuItems= ["Product","Cart", "Profile"];
    }
    getMenuItems() : string[]
    {
        return this.menuItems;
    }

}