import { TestBed, inject } from '@angular/core/testing';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

describe('ProcessHttpmsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHTTPMsgService]
    });
  });

  it('should be created', inject([ProcessHTTPMsgService], (service: ProcessHTTPMsgService) => {
    expect(service).toBeTruthy();
  }));
});
