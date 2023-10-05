import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerproductComponent } from './sellerproduct.component';

describe('SellerproductComponent', () => {
  let component: SellerproductComponent;
  let fixture: ComponentFixture<SellerproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerproductComponent]
    });
    fixture = TestBed.createComponent(SellerproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
