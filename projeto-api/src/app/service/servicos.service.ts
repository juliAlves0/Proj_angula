import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbunsModel } from '../alunos/aluno.model';

Observable
HttpClient

@Injectable({
  providedIn: 'root'
})

export class ServicosService {

  private url: string = "http://localhost:3000/albuns/";
  constructor(private http: HttpClient) { }
    
    listarAlunos(): Observable<any> { 
      return this.http.get(`${this.url}`);
    }

    cadastrar(aluno: AlbunsModel): Observable<any> {
      return this.http.post(`${this.url}`, aluno);
    }

    atualizar(id: any, aluno: AlbunsModel): Observable<any> {
      return this.http.put(`${this.url}`.concat(id), aluno);
    }

    excluir(id: any) {
      return this.http.delete(`${this.url}`.concat(id));
    }

}
