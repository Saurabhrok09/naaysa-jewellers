import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenPlusOneComponent } from './ten-plus-one.component';

describe('TenPlusOneComponent', () => {
  let component: TenPlusOneComponent;
  let fixture: ComponentFixture<TenPlusOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenPlusOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenPlusOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
