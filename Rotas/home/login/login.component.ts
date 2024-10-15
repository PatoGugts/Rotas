import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit(form: any) {
    const { username, password } = form.value;
    if (username === 'admin' && password === '123') {
      this.router.navigate(['/home', username]);
    } else {
      this.errorMessage = 'Usuário ou senha inválido';
    }
  }
}