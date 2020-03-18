import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponentComponent } from './greet-component/greet-component.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartService } from './cart-details/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponentComponent,
    HelloComponent,
    ProductComponent,
    MenuComponent,
    CartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
