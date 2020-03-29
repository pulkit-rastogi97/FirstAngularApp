import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../node_modules/rxjs';
import {Product} from './product';

@Injectable()

export class ProductJSService
{
    constructor(private httpClient : HttpClient)
    {

    }

    getProducts():Observable<any>
    {
        //Interacting with server side programming
        return this.httpClient.get('./assets/product.json');
    }

}