import { Component } from '@angular/core';
import {LlistadeCorreus} from '../llistade-correus/llistade-correus';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-correu',
  imports: [
    NgStyle
  ],
  templateUrl: './correu.html',
  styleUrl: './correu.css',
})

export class Correu {
  titulo = 'Feliz Verano';
  caracteres = this.titulo.length

}
