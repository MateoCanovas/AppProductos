import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaRegistrosComponent } from './componentes/tabla-registros/tabla-registros.component';
import { RegistrarProductoComponent } from './componentes/registrar-producto/registrar-producto.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.router.module';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { DatePipe } from '@angular/common';
import { VerProductoComponent } from './componentes/ver-producto/ver-producto.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaRegistrosComponent,
    RegistrarProductoComponent,
    HistoricoComponent,
    VerProductoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
