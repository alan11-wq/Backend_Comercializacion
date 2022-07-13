import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActualizarServicioService {
  URL = 'http://localhost:5000/productos/actualizar'

  constructor(private http: HttpClient) {
    console.log("Servicio de actualizacion corriendo")
  }

  actualizaBD(update:DatosActualizar): Observable<DatosActualizar> {
    return this.http.put<DatosActualizar>(this.URL,update);
  }
}
  export interface DatosActualizar
{
    id_producto:String,
    nombre_producto: String,
    descripcion_producto: String,
    precio_producto: String,
    stock_producto: String,
    id_categoria: String
  }
