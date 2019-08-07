import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {TeacherService} from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherRegistrationForm = this.fb.group({
    teacherId: ['1'],
    teacherName: ['',  [Validators.required, Validators.minLength(5)]],
    address: [''],
    email: [''],
    phoneNumber: [''],
    alternateEmails: this.fb.array([])

  });

  constructor(private fb: FormBuilder, private teacherService: TeacherService) {}
  get TeacherName() {
   return this.teacherRegistrationForm.get('teacherName');
  }

  get alternateEmails() {
    return this.teacherRegistrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }
  ngOnInit() {}

  onSubmit() {
    console.log(this.teacherRegistrationForm.value);
    this.teacherService.addTeacher(this.teacherRegistrationForm.value)
      .subscribe(
          response => console.log('Success!', response),
        error => console.log('Error!', error)
      );
  }
}
