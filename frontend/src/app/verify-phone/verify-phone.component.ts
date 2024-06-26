import { Component, OnInit } from '@angular/core';
import { VerifyPhoneService } from './verify-phone.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.css']
})
export class VerifyPhoneComponent implements OnInit {
  code: string = '';
  userId: string = '';
  errorMessage: string = '';

  constructor(
    private verifyService: VerifyPhoneService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      console.log('UserId:', this.userId);
    });
  }

  verify(): void {
    this.verifyService.verify(this.code, this.userId).subscribe(
      response => {
        if (response === true) {
          this.router.navigate(['/perfil']);
        } else {
          console.error('O código não foi validado com sucesso.');
          this.errorMessage = 'O código inserido não é válido. Por favor, tente novamente.';
        }
      },
      error => {
        console.error('Erro ao verificar o código', error);
      }
    );
  }
}