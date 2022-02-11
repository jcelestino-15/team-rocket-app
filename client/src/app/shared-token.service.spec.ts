import { TestBed } from '@angular/core/testing';

import { SharedTokenService } from './shared-token.service';

describe('SharedTokenService', () => {
  let service: SharedTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
