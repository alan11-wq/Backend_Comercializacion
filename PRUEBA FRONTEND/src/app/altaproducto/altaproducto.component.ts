import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-altaproducto',
  templateUrl: './altaproducto.component.html',
  styleUrls: ['./altaproducto.component.css']
})
export class AltaproductoComponent implements OnInit {

  public formAltaProducto: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formAltaProducto = this.formBuilder.group({
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      precio: ['', Validators.required],
      categoria:['', Validators.requiredTrue]
    })
  }
SaveProducto(){
    console.log(this.formAltaProducto.value)
}
}
