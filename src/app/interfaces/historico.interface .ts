import { Producto } from "./producto.interface";

export interface Historico {
    fecha: string,
    descripcion: string,
    producto: Producto
  }