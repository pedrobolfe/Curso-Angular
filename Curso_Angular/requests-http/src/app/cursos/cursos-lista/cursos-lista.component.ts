import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent {
  cursos: Curso[] = [];

  constructor(
    private service: CursosService
  ){}

  ngOnInit() {
    this.service.list()
      .subscribe(
        dados => this.cursos = dados, 
      );
  }

  onRefresh() {
    this.ngOnInit();
  }

  onEdit(event: any) {}

  onDelete(event: any) {
  }
}