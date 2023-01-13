import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPedidosComponent } from './pizza-pedidos.component';

describe('PizzaPedidosComponent', () => {
  let component: PizzaPedidosComponent;
  let fixture: ComponentFixture<PizzaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
