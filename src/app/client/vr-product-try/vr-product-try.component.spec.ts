import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrProductTryComponent } from './vr-product-try.component';

describe('VrProductTryComponent', () => {
  let component: VrProductTryComponent;
  let fixture: ComponentFixture<VrProductTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrProductTryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrProductTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
