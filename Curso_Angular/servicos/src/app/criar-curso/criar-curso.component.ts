import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoServiceService } from '../cursos/curso-service.service';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component'


@Component({
  selector: 'service-criar-curso',
  standalone: true,
  imports: [CommonModule, ReceberCursoCriadoComponent],
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.css',
  providers: [CursoServiceService]
})

export class CriarCursoComponent {
  cursos: string[] = [];

  constructor (private cursoService: CursoServiceService){
  }

  onAddCurso(curso: any){
    this.cursoService.addCurso(curso);
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCurso();
  }
}
