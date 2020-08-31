import { TestBed } from '@angular/core/testing';

import { DataTransmitterService } from './data-transmitter.service';

describe('DataTransmitterService', () => {
  let service: DataTransmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
