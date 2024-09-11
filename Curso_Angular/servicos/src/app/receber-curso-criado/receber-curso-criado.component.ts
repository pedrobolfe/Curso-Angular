import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoServiceService } from '../cursos/curso-service.service';
@Component({
  selector: 'app-receber-curso-criado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.css'
})
export class ReceberCursoCriadoComponent {
  curso: string = '';

  constructor(private CursoService: CursoServiceService){

  }

  ngOnInit(){
    this.CursoService.emitirCurso.subscribe(curso => {
      this.curso = curso
    });
  }
}
