import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BajaServicioService {
URL='http://localhost:5000/productos/baja/810';

constructor(private http:HttpClient) {
  console.log("Servicio de baja corriendo")
}
bajaBD():Observable<any>{
  return this.http.delete(this.URL)
}
}

export interface DatosBaja
{
  id_producto:String,
  nombre_producto: String,
  descripcion_producto: String,
  precio_producto: String,
  stock_producto: Number,
  id_categoria: String
}
