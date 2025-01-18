import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenPlusOneSchemaComponent } from './wallet.component';

describe('TenPlusOneSchemaComponent', () => {
  let component: TenPlusOneSchemaComponent;
  let fixture: ComponentFixture<TenPlusOneSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenPlusOneSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenPlusOneSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
