import { TestBed } from '@angular/core/testing';

import { PlatosMenuService } from './platos-menu.service';

describe('PlatosMenuService', () => {
  let service: PlatosMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatosMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
