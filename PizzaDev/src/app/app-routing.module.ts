import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import {PizzaPedidosComponent} from './components/pizza-pedidos/pizza-pedidos.component';
import {MinhasComprasComponent} from './components/minhas-compras/minhas-compras.component';

const routes: Routes = [
  { path: 'home', component: MenuBarComponent },
  { path: 'pizzas', component: PizzaPedidosComponent},
  { path: 'compras', component:MinhasComprasComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
