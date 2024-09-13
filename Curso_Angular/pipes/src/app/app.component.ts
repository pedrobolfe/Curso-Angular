import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ExemplosPipeComponent } from './exemplos-pipe/exemplos-pipe.component';
import { CamelCasePipe } from './camel-case.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExemplosPipeComponent, CamelCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
}
