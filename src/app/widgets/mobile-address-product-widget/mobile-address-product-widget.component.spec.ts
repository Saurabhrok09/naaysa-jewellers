import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAddressProductWidgetComponent } from './mobile-address-product-widget.component';

describe('MobileAddressProductWidgetComponent', () => {
  let component: MobileAddressProductWidgetComponent;
  let fixture: ComponentFixture<MobileAddressProductWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAddressProductWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAddressProductWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
