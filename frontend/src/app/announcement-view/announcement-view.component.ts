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
  selectedIndex = 0;
  
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
      },
      (error) => {
        console.error('Erro ao carregar anúncio', error);
      }
    );
  }

  selectSlide(index: number): void {
    this.selectedIndex = index;
  }

  prevSlide(): void {
    this.selectedIndex = (this.selectedIndex === 0) ? this.announcement?.images.length - 1 : this.selectedIndex - 1;
  }

  nextSlide(): void {
    this.selectedIndex = (this.selectedIndex === this.announcement?.images.length - 1) ? 0 : this.selectedIndex + 1;
  }

  openWhatsApp(phoneNumber: string) {
    const message = 'Olá, gostaria de obter mais informações sobre o anúncio.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}