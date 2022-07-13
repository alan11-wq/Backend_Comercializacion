import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { Producto1Component } from './producto1/producto1.component';
import { Producto2Component } from './producto2/producto2.component';
import { NavbarComponent } from './navbar/navbar.component';

import {RoutingModule} from "../routing/routing.module";
import {RoutingRoutingModule} from "../routing/routing-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProductosComponent,
    Producto1Component,
    Producto2Component,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    RouterModule,
    RoutingRoutingModule,
    RoutingModule
  ]
})
export class GaleriaModule { }
