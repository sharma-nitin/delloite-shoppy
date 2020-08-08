import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DtShopNavbarComponent } from './dt-shop-navbar/dt-shop-navbar.component';
import { DtShopProductListComponent } from './dt-shop-product-list/dt-shop-product-list.component';
import { DtShopProductDetailComponent } from './dt-shop-product-detail/dt-shop-product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DtShopNavbarComponent,
    DtShopProductListComponent,
    DtShopProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
