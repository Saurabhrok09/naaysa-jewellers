import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryAddressComponent } from './add-delivery-address.component';

describe('AddDeliveryAddressComponent', () => {
  let component: AddDeliveryAddressComponent;
  let fixture: ComponentFixture<AddDeliveryAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeliveryAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
