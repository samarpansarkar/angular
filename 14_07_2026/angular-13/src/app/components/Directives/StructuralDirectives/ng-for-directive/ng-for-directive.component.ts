import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  courses:string[]=["C","Java","HTML","CSS"]
  citys: string[]=['Kolkata', 'Pune',"Bengalore",'Mumbai'];

  users:any[] = [
  {
    id: 101,
    name: 'Ram',
    address: 'Bangalore',
    isActive: true
  },
  {
    id: 102,
    name: 'Shyam',
    address: 'Mumbai',
    isActive: false
  },
  {
    id: 103,
    name: 'Amit',
    address: 'Delhi',
    isActive: true
  },
  {
    id: 104,
    name: 'Priya',
    address: 'Kolkata',
    isActive: true
  },
  {
    id: 105,
    name: 'Neha',
    address: 'Chennai',
    isActive: false
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
