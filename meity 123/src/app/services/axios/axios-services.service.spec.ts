import { TestBed } from '@angular/core/testing';

import { AxiosServicesService } from './axios-services.service';

describe('AxiosServicesService', () => {
  let service: AxiosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
