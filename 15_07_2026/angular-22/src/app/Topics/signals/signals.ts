import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  phoneNumber=signal(0);

  setNumber(){
    this.phoneNumber.set(8250464855);
  }

  resetNumber(){
    this.phoneNumber.set(+0);
  }

  count=signal(0);

  increament (){
    this.count.update(val=>val+1);
  }

  decrement (){
    this.count.update(val=>val-1);
  }
}
