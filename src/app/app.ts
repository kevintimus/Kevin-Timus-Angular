import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Correu} from './correu/correu';
import {LlistadeCorreus} from './llistade-correus/llistade-correus';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Correu, LlistadeCorreus],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular3');
}
