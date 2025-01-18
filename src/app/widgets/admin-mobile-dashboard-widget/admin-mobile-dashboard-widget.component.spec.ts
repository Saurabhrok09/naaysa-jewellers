import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMobileDashboardWidgetComponent } from './admin-mobile-dashboard-widget.component';

describe('AdminMobileDashboardWidgetComponent', () => {
  let component: AdminMobileDashboardWidgetComponent;
  let fixture: ComponentFixture<AdminMobileDashboardWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMobileDashboardWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMobileDashboardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
