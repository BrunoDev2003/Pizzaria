import { Component } from '@angular/core';

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html',
  styleUrls: ['./minhas-compras.component.css']
})
export class MinhasComprasComponent {

  addRow(row: {
    image: string; 
    nome: string; 
    tipo: string; 
    preco: string;
    qtde: string;
    delete: string;
  }): void {
    this.pizza_items.push(row);
  }
  pizza_items=[
    {
      "image": "<picture></picture>",
      "nome": "Nome da pizza",
      "tipo": "Tipo pizza",
      "preco": "Preço pizza em R$",
      "qtde": "QTDE pizza",
      "delete": "Deletar"
    }
  ];
}
