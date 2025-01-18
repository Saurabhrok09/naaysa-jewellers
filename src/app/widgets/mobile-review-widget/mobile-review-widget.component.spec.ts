import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileReviewWidgetComponent } from './mobile-review-widget.component';

describe('MobileReviewWidgetComponent', () => {
  let component: MobileReviewWidgetComponent;
  let fixture: ComponentFixture<MobileReviewWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileReviewWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileReviewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
