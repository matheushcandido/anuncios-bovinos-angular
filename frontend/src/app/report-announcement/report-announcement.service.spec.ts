import { TestBed } from '@angular/core/testing';

import { ReportAnnouncementService } from './report-announcement.service';

describe('ReportAnnouncementService', () => {
  let service: ReportAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
