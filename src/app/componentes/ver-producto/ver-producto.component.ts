import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html'
})
export class VerProductoComponent implements OnInit {

  private _producto!: Producto;

  get producto() {
    return this._producto;
  }

  constructor(
    private activateRoute: ActivatedRoute,
    private productoService: ProductoService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( ({id}) => {
      console.log(id);
      
      this._producto = this.productoService.buscarProducto(+id);

      console.log(this._producto);
      
    });
  }

}
