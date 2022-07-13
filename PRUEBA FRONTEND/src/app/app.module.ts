import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {GaleriaModule} from "./galeria/galeria.module";
import {GaleriaRoutingModule} from "./galeria/galeria-routing.module";

import {RoutingModule} from "./routing/routing.module";
import {RoutingRoutingModule} from "./routing/routing-routing.module";

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PruebaComponent } from './prueba/prueba.component';
import {AltaproductoComponent} from "./altaproducto/altaproducto.component";

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    AltaproductoComponent
  ],
  imports: [
    BrowserModule,
    GaleriaRoutingModule,
    GaleriaModule,
    RoutingModule,
    RoutingRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
