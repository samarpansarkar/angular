import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tow-way-data-binding',
  templateUrl: './tow-way-data-binding.component.html',
  styleUrls: ['./tow-way-data-binding.component.css']
})
export class TowWayDataBindingComponent implements OnInit {

  firstName:string="";
  secondName:string="";

  

  constructor() { }

  ngOnInit(): void {
  }

}
