import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent {
  idCurso: number =0;
  inscricao: Subscription | null = null;
  curso: any;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService
  ){
    //this.idCurso = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe( (params: any) => {
      this.idCurso = params['id'];

      if(this.cursoService.getCurso(this.idCurso) == null){

        this.router.navigate(["/**"]);
      }else{
        console.log(this.idCurso);
        this.curso = this.cursoService.getCurso(this.idCurso);
      }
    });
  }

  ngOnDestroy() {
    if (this.inscricao) { // Verifica se inscricao não é null
      this.inscricao.unsubscribe();
    }
  }
}
