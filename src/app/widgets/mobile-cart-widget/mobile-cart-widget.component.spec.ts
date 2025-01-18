import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCartWidgetComponent } from './mobile-cart-widget.component';

describe('MobileCartWidgetComponent', () => {
  let component: MobileCartWidgetComponent;
  let fixture: ComponentFixture<MobileCartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCartWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
