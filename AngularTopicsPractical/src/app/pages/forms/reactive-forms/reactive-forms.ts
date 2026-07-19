import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  studentForm:FormGroup =new FormGroup({
    name: new FormControl(),
    email:new FormControl(),
    password: new FormControl(),
    phoneNumber: new FormControl(),
  })
}
