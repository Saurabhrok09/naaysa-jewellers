import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUpdateModalComponent } from './material-update-modal.component';

describe('MaterialUpdateModalComponent', () => {
  let component: MaterialUpdateModalComponent;
  let fixture: ComponentFixture<MaterialUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUpdateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
