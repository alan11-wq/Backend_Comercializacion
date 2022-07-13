import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  id='';
  MostrarProducto(id:Number)
  {
    this.router.navigate(['productos/producto1',id]);
    this.router.navigate(['productos/producto2', id]);
  }
  constructor(private router:Router, private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.ruta.snapshot.params.get('id');
  }

}
