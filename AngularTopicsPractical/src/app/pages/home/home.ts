import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div class="flex flex-col items-center h-full text-center mt-20">
      <h1 class="text-4xl font-bold text-slate-800 mb-4">Welcome to Angular Topics Practical</h1>
      <p class="text-lg text-slate-600 max-w-2xl">
        This is your practical learning application. Select a topic from the navigation bar above to view the implementation and start learning!
      </p>
    </div>
  `
})
export class Home {}
