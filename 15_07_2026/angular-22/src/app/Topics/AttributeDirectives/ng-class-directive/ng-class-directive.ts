import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './ng-class-directive.html',
  styleUrl: './ng-class-directive.css',
})
export class NgClassDirective {
  divClass:string=''

  changeStyleToGreen(){
    this.divClass="bg-green-800 text-white"
  }

  changeStyleToRed(){
    this.divClass='bg-red-800 text-black'
  }
}
