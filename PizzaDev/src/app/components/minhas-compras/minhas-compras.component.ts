import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceComponent} from "../api-service/api-service.component";

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html',
  styleUrls: ['./minhas-compras.component.css']
})
export class MinhasComprasComponent {

  constructor(private ApiServiceComponent: ApiServiceComponent) { }
  


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
  
  onSubmit() {
    this.ApiServiceComponent.pizza(this.addRow).subscribe((data: {
      result: any; status: number; 
}) => {
      debugger;
      if(data.status === 200) {
        window.localStorage.setItem('token',data.result.token);
      }
    })
  }
}
