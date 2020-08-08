import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-dt-shop-product-list',
  templateUrl: './dt-shop-product-list.component.html',
  styleUrls: ['./dt-shop-product-list.component.scss']
})
export class DtShopProductListComponent implements OnInit {
  loader = true;
  productsList = [];
  filteredList = [];
  constructor(private productservice: ProductService,
    private router: Router,
    private searchService: SearchService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe((products: any) => {
      this.productsList = products;
      this.filteredList = this.productsList;
      this.loader = false;
    });

    this.searchService.getSearchKey().subscribe((res: string) => {
      this.filteredList = this.productsList.filter((product) => {
        return product.title.toLowerCase().startsWith(res.toLowerCase());
      });
    });
  }

  productDetail(item) {
    this.productservice.setProduct(item)
    this.router.navigate(['detail', item.id]);
  }

}
