import { TestBed } from '@angular/core/testing';

import { PagadorService } from './pagador.service';

describe('PagadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagadorService = TestBed.get(PagadorService);
    expect(service).toBeTruthy();
  });
});
