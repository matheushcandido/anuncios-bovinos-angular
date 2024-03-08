import { TestBed } from '@angular/core/testing';

import { AnnouncementViewService } from './announcement-view.service';

describe('AnnouncementViewService', () => {
  let service: AnnouncementViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncementViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
