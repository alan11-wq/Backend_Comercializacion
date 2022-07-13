import { Component, OnInit } from '@angular/core';
import {ConsultaServicioService, DatosConsulta} from "../servicios/consulta-servicio.service";
import {BajaServicioService, DatosBaja} from "../servicios/baja-servicio.service";
import {AltaServicioService, DatosAlta} from "../servicios/alta-servicio.service";
import {ActualizarServicioService, DatosActualizar} from "../servicios/actualizar-servicio.service";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  lista:DatosConsulta[]=[];
  listabaja:DatosBaja[]=[];
  listaalta:DatosAlta[]=[];
  listaactualizar:DatosActualizar[]=[];

  constructor(private consultaServicio: ConsultaServicioService, private bajaServicio:BajaServicioService, private altaServicio:AltaServicioService, private actualizaServicio:ActualizarServicioService) { }

  ngOnInit(): void {
    this.EjecutaConsulta()
    this.EjecutaBaja()
    this.EjecutaAlta()
    this.EjecutaActualizar()

  }

  EjecutaConsulta(){
    this.consultaServicio.consultaBD().subscribe(data=> this.lista = data);
  }

  EjecutaBaja(){
    this.bajaServicio.bajaBD().subscribe(res=>{console.log(res)});
  }

  EjecutaAlta(){
    const altaProducto ={id_producto:'810',nombre_producto:'Monitor PC ',descripcion_producto:'Monitor de PC de 40 pulgadas',precio_producto:'$5,999',stock_producto:'10',id_categoria:'702'}
  this.altaServicio.altaBD(altaProducto).subscribe(data=> console.log(data));
 }

  EjecutaActualizar(){
    const updateProducto= {id_producto:'810',nombre_producto:'Pulsera',descripcion_producto:'Pulsera electronica',precio_producto:'200',stock_producto:'50',id_categoria:'702'}
  this.actualizaServicio.actualizaBD(updateProducto).subscribe(data =>{console.log(data)});
}
}
