import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { PizzaPedidosComponent } from './components/pizza-pedidos/pizza-pedidos.component';
import { ContentComponent } from './pages/content/content.component';
import { MinhasComprasComponent } from './components/minhas-compras/minhas-compras.component';
import { ContatoPedidosComponent } from './components/contato-pedidos/contato-pedidos.component';
import { ApiServiceComponent } from '../app/components/api-service/api-service.component';
import { LoginComponent } from './components/login/login.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    PizzaPedidosComponent,
    ContentComponent,
    MinhasComprasComponent,
    ContatoPedidosComponent,
    ApiServiceComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
