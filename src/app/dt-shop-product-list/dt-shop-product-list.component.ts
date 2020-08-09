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
  category = 'All';
  minPrice = 0;
  maxprice = 1000;
  searchkeyword = '';

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
      this.searchkeyword = res;
      if (this.category === 'All') {
        this.filteredList = this.productsList.filter((product) => {
          return product.title.toLowerCase().startsWith(res.toLowerCase()) &&
            product.price >= this.minPrice && product.price <= this.maxprice;
        });
      } else {
        this.filteredList = this.productsList.filter((product) => {
          return product.title.toLowerCase().startsWith(res.toLowerCase()) &&
            product.category.toLowerCase() === this.category.toLowerCase() &&
            product.price >= this.minPrice && product.price <= this.maxprice;
        });
      }
    });
  }

  productDetail(item) {
    this.productservice.setProduct(item)
    this.router.navigate(['detail', item.id]);
  }

  selectedcategory(category) {
    this.category = category;
    if (category === 'All') {
      this.filteredList = this.productsList.filter((product) => {
        return product.title.toLowerCase().startsWith(this.searchkeyword.toLowerCase()) &&
          product.price >= this.minPrice && product.price <= this.maxprice;
      });
    } else {
      this.filteredList = this.productsList.filter((product) => {
        return product.title.toLowerCase().startsWith(this.searchkeyword.toLowerCase()) &&
          product.category.toLowerCase() === category.toLowerCase() &&
          product.price >= this.minPrice && product.price <= this.maxprice;
      });
    }
  }

  priceRange(range) {
    this.minPrice = range.value;
    this.maxprice = range.highValue;
    if (this.category === 'All') {
      this.filteredList = this.productsList.filter((product) => {
        return product.title.toLowerCase().startsWith(this.searchkeyword.toLowerCase()) &&
          product.price >= range.value && product.price <= range.highValue;
      });
    } else {
      this.filteredList = this.productsList.filter((product) => {
        return product.title.toLowerCase().startsWith(this.searchkeyword.toLowerCase()) &&
          product.category.toLowerCase() === this.category.toLowerCase() &&
          product.price >= range.value && product.price <= range.highValue;
      });
    }
  }
}
