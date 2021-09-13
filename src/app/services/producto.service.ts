import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Historico } from '../interfaces/historico.interface ';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _producto: Producto = {
    id: 0,
    tipo: '',
    cantidad: 0,
    precio: 0
  };
  private _productos: Producto[] = [];
  private _historico: Historico[] = [];

  get producto() {
    return this._producto;
  }

  get productos() {
    return this._productos;
  }

  get historico() {
    return this._historico;
  }

  constructor(public datepipe: DatePipe) {
    this._productos = JSON.parse(localStorage.getItem('productos')!) || [];
    this._historico = JSON.parse(localStorage.getItem('historico')!) || [];
    this._producto.id = this._productos.length;
    console.log(this._productos.length);
    
   }

   registrarproducto() {

    const productoString = JSON.stringify(this._producto);
    let isNuevo: boolean = true;

    // this._productos.forEach( p => {
    //   if (JSON.stringify(p) === productoString) {
    //     isNuevo = false;
    //     break;
    //   }
    // });
    
      for (let index = 0; index < this._productos.length; index++) {
        const element = this._productos[index];
        if (JSON.stringify(element) === productoString) {
          isNuevo = false;
          index = this._productos.length;
        }
      }
      
      
      if (isNuevo) {
        const p: Producto = {
          id: this._producto.id,
          tipo: this._producto.tipo,
          cantidad: this._producto.cantidad,
          precio: this._producto.precio
        }
        this._productos.push(p);
        this._historico.push({ 
          fecha: this.datepipe.transform(new Date(), 'dd-MM-yyyy')!, 
          descripcion: 'Añadido producto', producto: this._producto});

        this._producto.id = this._productos.length;

        localStorage.setItem('productos', JSON.stringify(this._productos));
        localStorage.setItem('historico', JSON.stringify(this._historico));

        console.log(this._productos);
        console.log(this._historico);
        
        
      }
   }

   buscarProducto(id: number) {

    for (let index = 0; index < this._productos.length; index++) {
      const element = this._productos[index];
      
      if (element.id === id) {
        this._producto = this._productos[index];
        return element;
      }  
    }

    const prod: Producto = {
      id: 0,
      tipo: '',
      cantidad: 0,
      precio: 0
    }

      return prod;
   }

   borrarProducto(id: number) {

    for (let index = 0; index < this._productos.length; index++) {
      const element = this._productos[index];
      if (element.id === id) {
        this._productos.splice(index, 1);
      }  
    }
     
    // this._productos.splice(id-1);
    this._historico.push({ 
      fecha: this.datepipe.transform(new Date(), 'dd-MM-yyyy')!, 
      descripcion: 'Borrado producto', producto: this._producto});

    this._producto.id = this._productos.length;

    localStorage.setItem('productos', JSON.stringify(this._productos));
    localStorage.setItem('historico', JSON.stringify(this._historico));

  }
}
