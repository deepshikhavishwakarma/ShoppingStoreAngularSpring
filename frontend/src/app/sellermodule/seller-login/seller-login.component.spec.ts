import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLoginComponent } from './seller-login.component';

describe('SellerLoginComponent', () => {
  let component: SellerLoginComponent;
  let fixture: ComponentFixture<SellerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerLoginComponent]
    });
    fixture = TestBed.createComponent(SellerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
