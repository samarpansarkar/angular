import { Component, signal } from '@angular/core';
import { Signals } from './Topics/signals/signals';

@Component({
  selector: 'app-root',
  imports: [Signals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-22');
}
