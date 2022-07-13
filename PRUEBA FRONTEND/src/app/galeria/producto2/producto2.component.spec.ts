import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto2Component } from './producto2.component';

describe('Producto2Component', () => {
  let component: Producto2Component;
  let fixture: ComponentFixture<Producto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Producto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Producto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
