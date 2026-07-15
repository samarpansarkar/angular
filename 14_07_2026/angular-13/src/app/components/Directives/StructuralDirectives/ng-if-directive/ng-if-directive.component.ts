import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {

  show:boolean=false;

  changeState():void{
    this.show= !this.show
  }

  constructor() { }

  ngOnInit(): void {
  }

}
