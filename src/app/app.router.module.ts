import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HistoricoComponent } from "./componentes/historico/historico.component";
import { HomeComponent } from "./componentes/home/home.component";
import { RegistrarProductoComponent } from "./componentes/registrar-producto/registrar-producto.component";
import { TablaRegistrosComponent } from "./componentes/tabla-registros/tabla-registros.component";
import { VerProductoComponent } from "./componentes/ver-producto/ver-producto.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'gestionar',
        component: RegistrarProductoComponent
    },
    {
        path: 'ver',
        component: TablaRegistrosComponent
    },
    {
        path: 'historico',
        component: HistoricoComponent
    },
    {
        path: 'ver/:id',
        component: VerProductoComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouterModule {}