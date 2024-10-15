import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  message: string = '';

  onSubmit(form: any) {
    this.message = 'Salvo com sucesso';
  }
}