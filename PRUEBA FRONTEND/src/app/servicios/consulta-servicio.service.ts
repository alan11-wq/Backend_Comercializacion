import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultaServicioService {

  URL='http://localhost:5000/productos/consulta/805';

  constructor(private http: HttpClient) {
    console.log("Servicio Corriendo")
  }
  consultaBD():Observable<DatosConsulta[]>{
    return this.http.get<DatosConsulta[]>(this.URL)
  }
}

export interface DatosConsulta
{
id_producto:String,
nombre_producto: String,
descripcion_producto: String,
precio_producto: String,
stock_producto: String,
id_categoria: String
}
