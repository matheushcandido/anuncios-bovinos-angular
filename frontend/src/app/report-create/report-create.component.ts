import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportCreateService } from './report-create.service';
import { Report } from './report-create.model';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrl: './report-create.component.css'
})
export class ReportCreateComponent implements OnInit{
  report: Report = {
    id: '',
    idAnnouncement: '',
    sold: false,
    wrongAddress: false,
    wrongPrice: false,
    joke: false,
    wrongCategory: false,
    duplicated: false,
    illegal: false,
    fraud: false,
    note: '',
    status: 'ACTIVE'
  };

  constructor(private reportCreateService: ReportCreateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const idAnnouncement = params['idAnnouncement'];

      this.report.idAnnouncement = idAnnouncement;
    });
  }

  onSubmit() {

    this.reportCreateService.createReport(this.report).subscribe(
      (response) => {
        console.log('Reporte registrado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao registrar reporte:', error);
      }
    );
  }

}