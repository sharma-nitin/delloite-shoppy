import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-dt-shop-navbar',
  templateUrl: './dt-shop-navbar.component.html',
  styleUrls: ['./dt-shop-navbar.component.scss']
})
export class DtShopNavbarComponent implements OnInit {
  @ViewChild('searchbox',{ static: true}) searchbox: any;

  constructor(private searchService:SearchService) { }

  ngOnInit() {
    fromEvent(this.searchbox.nativeElement, 'keyup')
    .pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(300),
      distinctUntilChanged(),
    )
    .subscribe((text: string) => {
      this.searchService.setSearchKey(text);
    });
  }

}
