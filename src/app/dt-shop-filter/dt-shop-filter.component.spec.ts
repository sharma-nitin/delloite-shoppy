import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtShopFilterComponent } from './dt-shop-filter.component';

describe('DtShopFilterComponent', () => {
  let component: DtShopFilterComponent;
  let fixture: ComponentFixture<DtShopFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtShopFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtShopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
