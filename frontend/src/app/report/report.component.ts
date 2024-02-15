import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportService: ReportService){}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReports().subscribe(
      (data) => {
        this.reports = data;
      },
      (error) => {
        console.error('Erro ao carregar reportes', error);
      }
    );
  }

  closeReport(id: string): void {
    if (confirm('Tem certeza que deseja fechar este reporte?')) {
      const closedReport = { status: 1 };
      this.reportService.closeReport(id, closedReport).subscribe(
        () => {
          this.loadReports();
        },
        (error) => {
          console.error('Erro ao fechar report', error);
        }
      );
    }
  }

  deleteReport(id: string){
    if (confirm('Tem certeza que deseja deletar este reporte?')) {
      this.reportService.deleteReport(id).subscribe(
        () => {
          this.loadReports();
        },
        (error) => {
          console.error('Erro ao deletar reporte', error);
        }
      );
    }
  }
}
