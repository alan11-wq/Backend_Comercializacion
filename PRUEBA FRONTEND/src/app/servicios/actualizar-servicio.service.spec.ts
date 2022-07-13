import { TestBed } from '@angular/core/testing';

import { ActualizarServicioService } from './actualizar-servicio.service';

describe('ActualizarServicioService', () => {
  let service: ActualizarServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
