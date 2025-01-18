import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedOnHistoryComponent } from './based-on-history.component';

describe('BasedOnHistoryComponent', () => {
  let component: BasedOnHistoryComponent;
  let fixture: ComponentFixture<BasedOnHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasedOnHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasedOnHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
