import {booleanAttribute, Component} from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-llistade-correus',
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './llistade-correus.html',
  styleUrl: './llistade-correus.css',
})
export class LlistadeCorreus {
  correus = [
    { titol: 'kevintimus01@gmail.com', llegit: true},
    { titol: 'jordi1023@gmail.com', llegit: false },
    { titol: 'Yo que se 23515', llegit: false },
  ];

  // Contador leidos
  get llegits(): number {
    return this.correus.filter(c => c.llegit).length;
  }

  // Contador no liedos
  get noLlegits(): number {
    return this.correus.filter(c => !c.llegit).length;
  }
}
