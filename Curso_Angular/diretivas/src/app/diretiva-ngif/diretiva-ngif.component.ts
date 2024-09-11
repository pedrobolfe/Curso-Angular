import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {
  constructor() {}

  cursos: string[] = ["Angular", "Java", "Python"];

  // add curso
  cursoAdicionarVisivel: boolean = false;
  novoCurso: string = ''; // Armazena o curso digitado

  inserirCurso() {
    if (this.novoCurso) {
      this.cursos.push(this.novoCurso); 
      this.novoCurso = ''; 
    }
  }

  // Remover o curso
  cursoRemoveValor: boolean = false;
  tirarCurso: string = '';

  removerCurso() {
    const index = this.cursos.indexOf(this.tirarCurso); // Encontra o indice do curso na lista de cursos
    if (index !== -1) {
      this.cursos.splice(index, 1); // Remove o curso se ele for encontrado
      this.tirarCurso = ''; 
    }
  }
}
