import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';
import { AlbunsModel } from '../alunos/aluno.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  albuns: Array<any> = new Array();

  constructor (private alunoService: ServicosService) {}
  ngOnInit(): void {
    this.Listar();
  }

  Listar () {
    this.alunoService.listarAlunos().subscribe( albuns => {
      this.albuns = albuns;
    }, err => {
        console.log("Erro ao listar o aluno", err);
    } )
  }

}
