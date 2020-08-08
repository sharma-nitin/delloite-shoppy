import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dt-shop-product-detail',
  templateUrl: './dt-shop-product-detail.component.html',
  styleUrls: ['./dt-shop-product-detail.component.scss']
})
export class DtShopProductDetailComponent implements OnInit {
  selectedProduct: any;
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.getProduct().subscribe((res: any) => {
      this.selectedProduct = res;
    });
  }

}
