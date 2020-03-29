import {Component } from '@angular/core';
import {Product} from "./product";
import {ProductJSService} from './productjs.service';

@Component({
    
    selector : 'productjs',
    template : `
    
    <h1>List of Product</h1>
    <table border="3px solid black" align="center">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
        </tr>
        <tr *ngFor="let product of products">
            <td>{{product.id}}</td>
            <td>{{product.name}}</td>
            <td><img src={{product.imgPath}} height="40" width="100" /></td>
            <td>{{product.price}}</td>
            <td>{{product.category}}</td>
        </tr>
    </table>

    `,

    providers : [ProductJSService],
})

export class ProductJSComponent
{

    products : Product[];

    constructor(private productjsservice : ProductJSService)
    {
        this.productjsservice.getProducts().subscribe(res => {
            this.products = res;
            console.log("json "+this.products);

        });
    }


}