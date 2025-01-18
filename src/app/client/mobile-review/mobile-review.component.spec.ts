import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileReviewComponent } from './mobile-review.component';

describe('MobileReviewComponent', () => {
  let component: MobileReviewComponent;
  let fixture: ComponentFixture<MobileReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
