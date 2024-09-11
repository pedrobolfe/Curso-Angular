import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

import { CursoServiceService } from './cursos/curso-service.service';
import { LogService } from './shared/log.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursosComponent, CriarCursoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CursoServiceService, LogService]
})
export class AppComponent {
  title = 'servicos';
}
