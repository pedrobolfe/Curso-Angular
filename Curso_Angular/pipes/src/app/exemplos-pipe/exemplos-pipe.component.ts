import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCasePipe } from '../camel-case.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'exemplos-pipe',
  standalone: true,
  imports: [CommonModule, CamelCasePipe, FormsModule],
  templateUrl: './exemplos-pipe.component.html',
  styleUrl: './exemplos-pipe.component.css'
})
export class ExemplosPipeComponent {
  livros: { 
      [key: number]: { 
      titulo: string; 
      anoLancamento: number; 
      autor: string; 
      valor: number; 
      numeroPg: number; 
      link: string 
      }} = {
        "0": {
          "titulo": "A volta dos que não foram",
          "anoLancamento": 1987,
          "autor": "Ferdegundes Silveira Polegar",
          "valor": 69.69,
          "numeroPg": 5,
          "link": "https://github.com/pedrobolfe"
        },
        "1": {
          "titulo": "Poeira em alto mar",
          "anoLancamento": 2001,
          "autor": "Antonio Tonho Cunha",
          "valor": 38,
          "numeroPg": 54.3,
          "link": "https://github.com/pedrobolfe"
        },
        "2": {
          "titulo": "Caminho das sombras",
          "anoLancamento": 2003,
          "autor": "Bruno Oliveira",
          "valor": 45.00,
          "numeroPg": 350,
          "link": "https://github.com/pedrobolfe"
        },
        "3": {
          "titulo": "A arte da guerra",
          "anoLancamento": 500,
          "autor": "Sun Tzu",
          "valor": 29.99,
          "numeroPg": 160,
          "link": "https://github.com/pedrobolfe"
        },
        "4": {
          "titulo": "O senhor dos anéis",
          "anoLancamento": 1954,
          "autor": "J.R.R. Tolkien",
          "valor": 89.90,
          "numeroPg": 1200,
          "link": "https://github.com/pedrobolfe"
        },
        "5": {
          "titulo": "1984",
          "anoLancamento": 1949,
          "autor": "George Orwell",
          "valor": 55.00,
          "numeroPg": 328,
          "link": "https://github.com/pedrobolfe"
        },
        "6": {
          "titulo": "O Hobbit",
          "anoLancamento": 1937,
          "autor": "J.R.R. Tolkien",
          "valor": 49.50,
          "numeroPg": 310,
          "link": "https://github.com/pedrobolfe"
        },
        "7": {
          "titulo": "O Código Da Vinci",
          "anoLancamento": 2003,
          "autor": "Dan Brown",
          "valor": 62.00,
          "numeroPg": 489,
          "link": "https://github.com/pedrobolfe"
        }
      }

    livrosList: string[] = [];

    insertLivrosInList(): void {
      for (let i = 0; i < Object.keys(this.livros).length; i++) {
        this.livrosList.push(this.livros[i].titulo);
      }
    }

    filtro: string = '';
  
    livrosFiltrados(): string[] {
      const valorFiltro = this.filtro.toLowerCase();
      return this.livrosList.filter(titulo =>
        titulo.toLowerCase().includes(valorFiltro)
      );
    }
    constructor() { }

    ngOnInit(): void {
      this.insertLivrosInList();
    }


};