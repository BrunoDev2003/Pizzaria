import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { PizzaPedidosComponent } from './components/pizza-pedidos/pizza-pedidos.component';
import { ContentComponent } from './pages/content/content.component';
import { MinhasComprasComponent } from './components/minhas-compras/minhas-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    PizzaPedidosComponent,
    ContentComponent,
    MinhasComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
