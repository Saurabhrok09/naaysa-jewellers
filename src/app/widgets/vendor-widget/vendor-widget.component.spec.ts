import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorWidgetComponent } from './vendor-widget.component';

describe('VendorWidgetComponent', () => {
  let component: VendorWidgetComponent;
  let fixture: ComponentFixture<VendorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
