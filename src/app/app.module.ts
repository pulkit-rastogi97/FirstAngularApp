import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponentComponent } from './greet-component/greet-component.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartService } from './cart-details/cart.service';
import { ProfileComponent } from './profil.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { PipeDemoComponent } from './pipedemo.component';

var routes : Routes = [
  {
  path : '', //defaultPath when page is loaded.
  component : GreetComponentComponent
  },
  {
    path : 'product',
    component : ProductComponent,
    children :
    [{
      path : 'product/:id',
      component : ProductComponent
    }]
  },
  {
    path : 'cart',
    component : CartDetailsComponent,
  },
  {
    path : 'profile',
    component : ProfileComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    GreetComponentComponent,
    HelloComponent,
    ProductComponent,
    MenuComponent,
    CartDetailsComponent,
    ProfileComponent,
    PipeDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MenuService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
