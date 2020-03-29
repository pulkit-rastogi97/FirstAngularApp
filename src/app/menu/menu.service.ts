import {Injectable} from "@angular/core";

@Injectable()
export class MenuService{

    menuItems : string[];

    constructor()
    {
        this.menuItems= ["Product","Cart", "Profile","Contact","Signup","Login"];
    }
    getMenuItems() : string[]
    {
        return this.menuItems;
    }

}