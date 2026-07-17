import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-forms.html',
  styleUrl: './template-forms.css',
})
export class TemplateForms {
  studentObj = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    age: null,
    DOB: '',
    gender: '',
  };
  alertObject:any 
  onSubmit(form: any) {
    console.log(form.value);
    console.log(this.studentObj);

    alert(JSON.stringify(this.studentObj, null, 2));
  }

  resetForm(){
    this.studentObj={
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      age: null,
      DOB: '',
      gender: '',
    }
  };
}
