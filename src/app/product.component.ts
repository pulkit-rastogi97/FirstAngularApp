import {Component } from '@angular/core';
import {Product} from './product';
import { ProductServices } from './product.service';
import { CartService } from './cart-details/cart.service';

@Component({

    selector : "product",
    templateUrl : './product.component.html',
    providers : [ProductServices],
})

export class ProductComponent
{
    products : Product[];
    isAdmin : boolean = true;
    
    //Injecting service in the component
    constructor(private productService : ProductServices, private cartService : CartService)
    {
        this.products = productService.getProducts();
    }

    showDetails(product : Product) : void{
        alert(product.name+" "+product.price);
    }

    doSearch(searchStr : string) : void
    {
        let prodNames : string[] = new Array<string>();
        for(var i in this.products)
        {
            if(this.products[i].name.toLowerCase().startsWith(searchStr.toLowerCase()))
            {
                prodNames.push(this.products[i].name);
            }
        }
        alert(prodNames);

    }

    addToCart(product : Product) : void{
        this.cartService.addToCart(product);
    }
}