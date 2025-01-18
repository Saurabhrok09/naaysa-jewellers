import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMobileUsersWidgetComponent } from './admin-mobile-users-widget.component';

describe('AdminMobileUsersWidgetComponent', () => {
  let component: AdminMobileUsersWidgetComponent;
  let fixture: ComponentFixture<AdminMobileUsersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMobileUsersWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMobileUsersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
