import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {


  this.teacherForm = this.fb.group({
    name: ['', Validators.required],
    address: [''],
    email: [''],
    contactNumber: [''],
    // course: [''],
  });

  }

  onSubmit() {
    console.warn(this.teacherForm.value);
  }


}
