import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtShopNavbarComponent } from './dt-shop-navbar.component';

describe('DtShopNavbarComponent', () => {
  let component: DtShopNavbarComponent;
  let fixture: ComponentFixture<DtShopNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtShopNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtShopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
