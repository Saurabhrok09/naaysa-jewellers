import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalWidgetComponent } from './metal-widget.component';

describe('MetalWidgetComponent', () => {
  let component: MetalWidgetComponent;
  let fixture: ComponentFixture<MetalWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
