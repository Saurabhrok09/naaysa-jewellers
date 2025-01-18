import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureWidgetComponent } from './feature-widget.component';

describe('FeatureWidgetComponent', () => {
  let component: FeatureWidgetComponent;
  let fixture: ComponentFixture<FeatureWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
