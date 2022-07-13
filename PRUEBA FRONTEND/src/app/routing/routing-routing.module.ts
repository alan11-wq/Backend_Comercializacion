import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from "../galeria/productos/productos.component";

const routes: Routes = [
  {path:'productos/:id', component: ProductosComponent},
  {path:'productos', loadChildren:()=>import('./routing.module').then(module=>module.RoutingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
