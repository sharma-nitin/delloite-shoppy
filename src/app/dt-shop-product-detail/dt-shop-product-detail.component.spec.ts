import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtShopProductDetailComponent } from './dt-shop-product-detail.component';

describe('DtShopProductDetailComponent', () => {
  let component: DtShopProductDetailComponent;
  let fixture: ComponentFixture<DtShopProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtShopProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtShopProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
