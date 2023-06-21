import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';
import { RouteConfigLoadEnd, Router } from '@angular/router';

RouteConfigLoadEnd
Usuario


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuaioAutenticado: boolean = false;

  constructor(private router: Router) { }

  acesso(user: Usuario) {
    if(user.login === 'adm@senac.br' && user.senha === '123456') {
      this.usuaioAutenticado = true;
      alert("Bem vindo!! você sera direcionado para o painel de controle!");
      this.router.navigate(['painel']);
    }else {
      this.usuaioAutenticado = false;
      alert("Login e senha Invalidos, digite novamente!");
    }
  }
}
