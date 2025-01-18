import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDeliveryAddressComponent } from './choose-delivery-address.component';

describe('ChooseDeliveryAddressComponent', () => {
  let component: ChooseDeliveryAddressComponent;
  let fixture: ComponentFixture<ChooseDeliveryAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseDeliveryAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
