import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  get StudentName() {
      return this.studentRegistrationForm.get('StudentName');
  }

  constructor(private fb: FormBuilder) { }


  studentRegistrationForm = this.fb.group({
    studentId: ['1'],
    StudentName: ['',  [Validators.required, Validators.minLength(5)]],
    studentEmail: [''],
    studentAddress: ['']
  });

  ngOnInit() {
  }

}
