import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-dt-shop-filter',
  templateUrl: './dt-shop-filter.component.html',
  styleUrls: ['./dt-shop-filter.component.scss']
})
export class DtShopFilterComponent implements OnInit {

  @Output() selectedcategory = new EventEmitter<string>();
  @Output() priceRange = new EventEmitter<any>();

  value = 0;
  highValue = 10000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  Category = [
    {id: 'All', name: 'All'},
    {id: 'Men Clothing', name: 'Men Clothing'},
    {id: 'Women Clothing', name: 'Women Clothing'},
    {id: 'Jewelery', name: 'Jewelery'},
    {id: 'Electronics', name: 'Electronics'},
  ];

  selectedCategory = 1;
  constructor() { }

  ngOnInit() {
  }

  onCategoryChange(category){
    this.selectedcategory.emit(category);
  }

  priceFilter(range){
   this.priceRange.emit(range);

  }
}
