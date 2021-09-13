import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {

  id: number = 0;

  get producto() {
    return this.productoService.producto;
  }

  constructor(private productoService: ProductoService) { }

  guardar() {
    console.log(this.producto);
    
    this.producto.id = 
    this.productoService.productos
    [this.productoService.productos.length - 1].id + 1;
    this.productoService.registrarproducto();
  }

  buscar() {

    if ((this.id > 0) &&
     (this.id <= this.productoService.productos
      [this.productoService.productos.length -1].id)) {
      this.productoService.buscarProducto(this.id);
    }
  }

  borrar() {
    
    if ((this.id > 0) && (this.id <= this.productoService.productos.length)) {
      this.productoService.borrarProducto(this.id);
    }
  }

}
