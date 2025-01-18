import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBreakupComponent } from './price-breakup.component';

describe('PriceBreakupComponent', () => {
  let component: PriceBreakupComponent;
  let fixture: ComponentFixture<PriceBreakupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceBreakupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceBreakupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
