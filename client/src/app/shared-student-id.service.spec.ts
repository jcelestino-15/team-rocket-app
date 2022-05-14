import { TestBed } from '@angular/core/testing';

import { SharedStudentIdService } from './shared-student-id.service';

describe('SharedStudentIdService', () => {
  let service: SharedStudentIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedStudentIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
