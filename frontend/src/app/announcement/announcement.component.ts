import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  announcements: any[] = [];
  editingId: number | null = null;

  constructor(private announcementService: AnnouncementService, private router: Router) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe(
      (data) => {
        this.announcements = data;
      },
      (error) => {
        console.error('Erro ao carregar anúncios', error);
      }
    );
  }

  editAnnouncement(id: number): void {
    this.router.navigate(['/anuncios/editar'], { queryParams: { editId: id } });
  }  

  deleteAnnouncement(id: number): void {
    if (confirm('Tem certeza que deseja deletar este anúncio?')) {
      this.announcementService.deleteAnnouncement(id).subscribe(
        () => {
          this.loadAnnouncements();
        },
        (error) => {
          console.error('Erro ao deletar anúncio', error);
        }
      );
    }
  }
}