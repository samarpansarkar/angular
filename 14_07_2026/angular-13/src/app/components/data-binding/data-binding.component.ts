import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  courseName="Angular 13"

  altText=""
  imageURl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPS-Rm7K-faarW8DIBC4hRbjDxDwr8OcKbRTzS2FV_A&s=10"

  greet(message:string){
    alert(message);
  }

  changeCourseName(){
    if (this.courseName=="Angular 13") {
      this.courseName="Angular 21"
    }else{
      this.courseName="Angular 13"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
