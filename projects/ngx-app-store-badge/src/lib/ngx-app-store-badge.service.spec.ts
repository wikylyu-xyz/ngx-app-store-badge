import { TestBed } from '@angular/core/testing';

import { NgxAppStoreBadgeService } from './ngx-app-store-badge.service';

describe('NgxAppStoreBadgeService', () => {
  let service: NgxAppStoreBadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAppStoreBadgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
