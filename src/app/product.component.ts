import {Component, OnInit } from '@angular/core';
import {Product} from './product';
import { ProductServices } from './product.service';
import { CartService } from './cart-details/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector : "product",
    templateUrl : './product.component.html',
    providers : [ProductServices],
})

export class ProductComponent implements OnInit
{
    products : Product[];
    isAdmin : boolean = true;
    productId : number;
    sub : any;


    //Injecting service in the component
    constructor(private activatedRoute:ActivatedRoute ,private productService : ProductServices, private cartService : CartService)
    {
        // private activatedRoute:ActivatedRoute;
        this.products = productService.getProducts();
    }

    ngOnInit():void{
        this.sub=this.activatedRoute.params.subscribe(paramemeters =>{
            this.productId = parseInt(paramemeters['id']);
        })
        // alert("selected id = "+this.productId);
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