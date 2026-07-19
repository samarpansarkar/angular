import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-control-flow',
  imports: [],
  templateUrl: './if-else-control-flow.html',
  styleUrl: './if-else-control-flow.css',
})
export class IfElseControlFlow {
    Div1stVisible : boolean = false;

  showDiv1 (){
    this.Div1stVisible = true;
  }

  hideDiv1 (){
    this.Div1stVisible = false;
  }

  Div2ndVisible: boolean = true;

  showDiv2(){
    this.Div2ndVisible = true;
  }

  changeDiv2(){
    this.Div2ndVisible=false
  }
}
