import { TestBed } from '@angular/core/testing';

import { PgvalueService } from './pgvalue.service';

describe('PgvalueService', () => {
  let service: PgvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
