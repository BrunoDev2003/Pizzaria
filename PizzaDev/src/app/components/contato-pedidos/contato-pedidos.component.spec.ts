import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoPedidosComponent } from './contato-pedidos.component';

describe('ContatoPedidosComponent', () => {
  let component: ContatoPedidosComponent;
  let fixture: ComponentFixture<ContatoPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
