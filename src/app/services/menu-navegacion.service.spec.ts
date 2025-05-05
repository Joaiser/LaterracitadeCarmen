import { TestBed } from '@angular/core/testing';

import { MenuNavegacionService } from './menu-navegacion.service';

describe('MenuNavegacionService', () => {
  let service: MenuNavegacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuNavegacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
