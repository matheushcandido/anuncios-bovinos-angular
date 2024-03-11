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

  selectedImage: File | null = null;

  handleFileInput(event: any): void {
      const files = event.target.files;
      if (files && files.length > 0) {
          this.selectedImage = files[0];
      } else {
          this.selectedImage = null;
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
    const formData = new FormData();
    formData.append('announcement', JSON.stringify(this.announcement));
    if (this.selectedImage) {
      formData.append('imageFile', this.selectedImage);
  }

    const operation = this.isEditing
        ? this.announcementService.updateAnnouncement(formData)
        : this.announcementService.createAnnouncement(formData);

    operation.subscribe(
        (response) => {
            const operationType = this.isEditing ? 'atualizado' : 'criado';
            console.log(`Anúncio ${operationType} com sucesso:`, response);
            this.router.navigate(['/']);
        },
        (error) => {
            const operationType = this.isEditing ? 'atualizar' : 'criar';
            console.error(`Erro ao ${operationType} anúncio:`, error);
        }
    );
  }
}