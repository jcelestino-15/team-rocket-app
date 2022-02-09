import { TestBed } from '@angular/core/testing';

import { TokenSharingService } from './token-sharing.service';

describe('TokenSharingService', () => {
  let service: TokenSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
