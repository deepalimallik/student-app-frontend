import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentRegistrationForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {}
  get StudentName() {
      return this.studentRegistrationForm.get('StudentName');
  }
  ngOnInit() {
    this.initForm();
  }
  initForm(): void {
    this.studentRegistrationForm = this.fb.group({
      studentId: ['1'],
      StudentName: ['',  [Validators.required, Validators.minLength(5)]],
      studentEmail: [''],
      studentAddress: ['']
    });
  }

  onSubmit() {
    console.log(this.studentRegistrationForm.value);
    this.studentService.addStudent(this.studentRegistrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.log('Error!', error)
      );
  }

}
