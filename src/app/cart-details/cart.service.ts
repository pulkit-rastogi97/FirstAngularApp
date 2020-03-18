import { Injectable } from "@angular/core";
import { Product } from "../product";
import {Subject} from 'rxjs';


@Injectable()
export class CartService
{
    cart : Product[];

    //@SessionStorage()
    myCart : string;

    //subject
    private cartSource = new Subject<string>();

    //broadcaster 
    cartBroadcaster = this.cartSource.asObservable();

    constructor()
    {
        if(this.myCart)
        {
            this.cart = JSON.parse(this.myCart);
        }
        else
        {
            this.cart= new Array<Product>();
        }
    }

    addToCart(product : Product) : void
    {
        this.cart = this.cart.concat(product);// = this.cart.concat(product);
        
        console.log('Added to cart '+product.name);

        this.myCart = JSON.stringify(this.cart);
        
        //notify to the observer
        this.cartSource.next(this.myCart);

    }

    deleteFromCart(product : Product) : void{

        this.cart.splice(this.cart.indexOf(product));

        // this.myCart = JSON.stringify(this.cart);

    }

    getCartDetails() : Product[]
    {
        return this.cart;
    }

}