import { TestBed } from '@angular/core/testing';

import { TrafficService } from './traffic.service';

describe('TrafficService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrafficService = TestBed.get(TrafficService);
    expect(service).toBeTruthy();
  });
});
