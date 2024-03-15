import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementViewService } from './announcement-view.service';

@Component({
  selector: 'app-announcement-view',
  templateUrl: './announcement-view.component.html',
  styleUrls: ['./announcement-view.component.css']
})
export class AnnouncementViewComponent implements OnInit {
  announcement: any;
  
  constructor(
    private route: ActivatedRoute,
    private announcementViewService: AnnouncementViewService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const announcementId = params['id'];
      this.loadAnnouncement(announcementId);
    });
  }

  loadAnnouncement(announcementId: string): void {
    this.announcementViewService.getAnnouncement(announcementId).subscribe(
      (data) => {
        this.announcement = data;
        console.log(data);
      },
      (error) => {
        console.error('Erro ao carregar anúncio', error);
      }
    );
  }
}