import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStoreAddressWidgetComponent } from './mobile-store-address-widget.component';

describe('MobileStoreAddressWidgetComponent', () => {
  let component: MobileStoreAddressWidgetComponent;
  let fixture: ComponentFixture<MobileStoreAddressWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileStoreAddressWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileStoreAddressWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
