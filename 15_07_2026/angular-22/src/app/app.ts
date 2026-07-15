import { Component, signal } from '@angular/core';
import { Signals } from './Topics/signals/signals';
import { NgClassDirective } from './Topics/AttributeDirectives/ng-class-directive/ng-class-directive';

@Component({
  selector: 'app-root',
  imports: [Signals,NgClassDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-22');
}
