import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAddressWidgetComponent } from './mobile-address-widget.component';

describe('MobileAddressWidgetComponent', () => {
  let component: MobileAddressWidgetComponent;
  let fixture: ComponentFixture<MobileAddressWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAddressWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAddressWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
