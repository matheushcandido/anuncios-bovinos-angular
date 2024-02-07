import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAnnouncementComponent } from './report-announcement.component';

describe('ReportAnnouncementComponent', () => {
  let component: ReportAnnouncementComponent;
  let fixture: ComponentFixture<ReportAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
