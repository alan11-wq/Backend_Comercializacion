import { TestBed } from '@angular/core/testing';

import { BajaServicioService } from './baja-servicio.service';

describe('BajaServicioService', () => {
  let service: BajaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BajaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
