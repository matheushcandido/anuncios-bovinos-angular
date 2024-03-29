import { Component, OnInit } from '@angular/core';
import { AnnouncementCreateService } from './announcement-create.service';
import { Announcement } from './announcement-create.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announcement-create',
  templateUrl: './announcement-create.component.html',
  styleUrls: ['./announcement-create.component.css'],
})
export class AnnouncementCreateComponent implements OnInit {
  announcement: Announcement = {
    id: '',
    name: '',
    price: 0,
    birth: '',
    rga: '',
    code: '',
    idBreed: '',
    idBreedPaternal: '',
    idBreedMaternal: '',
    note: '',
  };

  files: File[] = [];

  isEditing = false;
  editingId: string | null = null;

  constructor(
    private announcementService: AnnouncementCreateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkEditingMode();
  }

  onFileSelected(event: any) {
    // Limpa o array de arquivos
    this.files = [];

    // Obtém os arquivos selecionados e os armazena no array
    for (let i = 0; i < event.target.files.length; i++) {
        this.files.push(event.target.files[i]);
    }
}

  checkEditingMode(): void {
    const editId = this.route.snapshot.queryParams['editId'];
    if (editId) {
      this.isEditing = true;
      this.editingId = editId;
      this.loadAnnouncementForEdit(this.editingId as string);
    }
  }
  
  loadAnnouncementForEdit(id: string): void {
    this.announcementService.getAnnouncementById(id).subscribe(
      (data) => {
        this.announcement = data;
      },
      (error) => {
        console.error('Erro ao carregar anúncio para edição', error);
      }
    );
  }

  onSubmit() {
    const operation = this.isEditing
      ? this.announcementService.updateAnnouncement(this.announcement)
      : this.announcementService.createAnnouncement(this.announcement);

    operation.subscribe(
      (response) => {
        const operationType = this.isEditing ? 'atualizado' : 'criado';
        console.log(`Anúncio ${operationType} com sucesso:`, response);

        this.uploadImage(response.id);

        this.router.navigate(['/']);
      },
      (error) => {
        const operationType = this.isEditing ? 'atualizar' : 'criar';
        console.error(`Erro ao ${operationType} anúncio:`, error);
      }
    );
  }

  uploadImage(announcementId: string) {
    this.files.forEach(file => {
        this.announcementService.uploadImage(file, announcementId).subscribe(
            (response) => {
                console.log('Imagem registrada com sucesso:', response);
            },
            (error) => {
                console.error('Erro ao registrar imagem:', error);
            }
        );
    });
  }
}