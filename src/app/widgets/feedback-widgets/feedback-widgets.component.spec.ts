import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackWidgetsComponent } from './feedback-widgets.component';

describe('FeedbackWidgetsComponent', () => {
  let component: FeedbackWidgetsComponent;
  let fixture: ComponentFixture<FeedbackWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
