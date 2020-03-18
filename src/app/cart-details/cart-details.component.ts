import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent  {

  cartProducts : Product[] = [] ;

  constructor(private cartService : CartService) { 
    this.cartService.cartBroadcaster.subscribe(res =>{
      alert(res);
      this.cartProducts=JSON.parse(res);

    })

    this.cartProducts = cartService.getCartDetails();
  }

  deleteFromCart(product : Product) : void{
    this.cartService.deleteFromCart(product);

    this.cartProducts=this.cartService.getCartDetails();
  }


}
