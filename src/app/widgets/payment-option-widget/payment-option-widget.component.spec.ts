import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOptionWidgetComponent } from './payment-option-widget.component';

describe('PaymentOptionWidgetComponent', () => {
  let component: PaymentOptionWidgetComponent;
  let fixture: ComponentFixture<PaymentOptionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentOptionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOptionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
