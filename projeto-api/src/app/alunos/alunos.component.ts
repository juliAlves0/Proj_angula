import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';
import { AlbunsModel } from './aluno.model';
ServicosService

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  albun: AlbunsModel = new AlbunsModel();
  Albuns: Array<any> = new Array();

  constructor (private alunoService: ServicosService) {}

  ngOnInit(): void {
    this.Listar();
  }

  Listar () {
    this.alunoService.listarAlunos().subscribe( a => {
      this.Albuns = a;
    }, err => {
        console.log("Erro ao listar o aluno", err);
    } )
  }   

  cadastrarAluno() {
    console.log(this.albun);
    this.alunoService.cadastrar(this.albun).subscribe( a => {
      this.albun = new AlbunsModel();
      this.Listar();
    }, err => {
      console.log("Erro ao cadastrar alunos", err);
    } )
  }

  alunoAtualizar (id: number) {
    this.alunoService.atualizar(id, this.albun).subscribe( a => {
      this.albun = new AlbunsModel();
      this.Listar();
    }, err => {
      console.log("Erro ao cadastrar alunos", err);
    } )
    }

    alunoRemover (id: number) {
      this.alunoService.excluir(id).subscribe( a => {
        this.albun = new AlbunsModel();
        this.Listar();
      }, err => {
        console.log("Erro ao cadastrar alunos", err);
      } )
      }

}

