import { TestBed } from '@angular/core/testing';

import { AltaServicioService } from './alta-servicio.service';

describe('AltaServicioService', () => {
  let service: AltaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
