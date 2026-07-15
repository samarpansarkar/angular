import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  courses:string[]=["C","Java","HTML","CSS"]

  constructor() { }

  ngOnInit(): void {
  }

}
