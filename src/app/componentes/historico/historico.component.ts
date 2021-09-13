import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {

  // registro: Producto[] = [
  //   {
  //     id: 0,
  //     tipo: 'Básico',
  //     cantidad: 200,
  //     precio: 50000
  //   },
  //   {
  //     id: 1,
  //     tipo: 'Básico',
  //     cantidad: 99999,
  //     precio: 20
  //   },
  //   {
  //     id: 2,
  //     tipo: 'Medio',
  //     cantidad: 1,
  //     precio: 2000000
  //   },
  //   {
  //     id: 3,
  //     tipo: 'Avanzado',
  //     cantidad: 100,
  //     precio: 2000
  //   }
  // ];

  get registro() {
    return this.productoService.historico;
  }

  constructor(private productoService: ProductoService) {}

}
