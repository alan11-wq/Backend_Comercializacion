import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AltaServicioService {
URL='http://localhost:5000/productos/alta'

  constructor(private http:HttpClient) {
  console.log("Servicio de alta corriendo");
  }

  altaBD(alta:DatosAlta):Observable<DatosAlta>{
  return this.http.post<DatosAlta>(this.URL, alta);
  }
}

export interface DatosAlta{
  id_producto:String,
  nombre_producto: String,
  descripcion_producto: String,
  precio_producto: String,
  stock_producto?: String,
  id_categoria: String
}
