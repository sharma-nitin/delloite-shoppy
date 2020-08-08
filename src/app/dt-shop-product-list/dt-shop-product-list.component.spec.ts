import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtShopProductListComponent } from './dt-shop-product-list.component';

describe('DtShopProductListComponent', () => {
  let component: DtShopProductListComponent;
  let fixture: ComponentFixture<DtShopProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtShopProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtShopProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
