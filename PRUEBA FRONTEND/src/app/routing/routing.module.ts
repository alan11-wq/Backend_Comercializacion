import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import {GaleriaRoutingModule} from "../galeria/galeria-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    GaleriaRoutingModule
  ]
})
export class RoutingModule { }
