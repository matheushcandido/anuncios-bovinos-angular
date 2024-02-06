import { TestBed } from '@angular/core/testing';

import { AnnouncementCreateService } from './announcement-create.service';

describe('AnnouncementCreateService', () => {
  let service: AnnouncementCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncementCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
