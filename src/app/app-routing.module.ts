import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DtShopProductListComponent } from './dt-shop-product-list/dt-shop-product-list.component';
import { DtShopProductDetailComponent } from './dt-shop-product-detail/dt-shop-product-detail.component';

const routes: Routes = [
  { path: '', component: DtShopProductListComponent },
  { path: 'home', component: DtShopProductListComponent },
  { path: 'detail/:id', component: DtShopProductDetailComponent },
  {path: '**', component: DtShopProductListComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
