import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAddedItemComponent } from './cart-added-item.component';
describe('CartAddedItemComponent', () => {
  let component: CartAddedItemComponent;
  let fixture: ComponentFixture<CartAddedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAddedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
