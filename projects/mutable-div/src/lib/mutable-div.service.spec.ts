import { TestBed } from '@angular/core/testing';

import { MutableDivService } from './mutable-div.service';

describe('MutableDivService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MutableDivService = TestBed.get(MutableDivService);
    expect(service).toBeTruthy();
  });
});
