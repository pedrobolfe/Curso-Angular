import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoServiceService } from './curso-service.service';

@Component({
  selector: 'service-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
  providers: [CursoServiceService]
})
export class CursosComponent {
  cursos: string[] = [];


  //cursosService: CursoService;

  constructor(private cursosService: CursoServiceService) {

  }

  ngOnInit() {
    this.cursos = this.cursosService.getCurso();

    CursoServiceService.criouCurso.subscribe(curso => {
      this.cursos.push(curso);
    });
  }
}
