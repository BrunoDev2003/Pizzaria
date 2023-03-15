import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceComponent} from "../services/api-service/api-service.component";
import { PizzaPedidosComponent } from '../pizza-pedidos/pizza-pedidos.component';

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html',
  styleUrls: ['./minhas-compras.component.css']
})
export class MinhasComprasComponent implements OnInit {

  constructor(private router: Router, private ApiServiceComponent: ApiServiceComponent) { }
  
  ngOnInit(): void {
      if(!window.localStorage.getItem('token')) {
        this.router.navigate(['row']);
        return;
      }
  }

  



  addRow(row: {
    id: number;
    image: string; 
    nome: string; 
    tipo: string; 
    preco: string;
    qtde: string;
    delete: string;
  }): void {
    this.pizza_items.push(row);
    this.router.navigate(['add-row']);
  }
  pizza_items=[
    {
      "id": 1,
      "image": "<picture></picture>",
      "nome": "Nome da pizza",
      "tipo": "Tipo pizza",
      "preco": "Preço pizza em R$",
      "qtde": "QTDE pizza",
      "delete": "Deletar"
    }
  ];

  
  deleteRow(row: {
    id: number;
    image: string; 
    nome: string; 
    tipo: string; 
    preco: string;
    qtde: string;
    delete: string;
  }): void {
      this.ApiServiceComponent.deleteUser(row.id).subscribe( data => {
      this.pizza_items.filter(u => u !== row);
    })
  }
  
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
