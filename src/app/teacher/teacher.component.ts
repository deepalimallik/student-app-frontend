import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeacherService} from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [TeacherService]
})
export class TeacherComponent implements OnInit {

  teacherRegistrationForm: FormGroup
  teachers;
  constructor(private fb: FormBuilder, private teacherService: TeacherService) { }

  get TeacherName() {
   return this.teacherRegistrationForm.get('teacherName');
  }

  get alternateEmails() {
    return this.teacherRegistrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }
  ngOnInit() {
    this.teacherRegistrationForm = this.fb.group({
      teacherName: ['']
    });
    this.initForm();
    this.getTeachers();
  }

  initForm(): void {
    this.teacherRegistrationForm = this.fb.group({
      teacherId: ['1'],
      teacherName: ['',  [Validators.required, Validators.minLength(5)]],
      address: [''],
      email: [''],
      phoneNumber: [''],
      alternateEmails: this.fb.array([])
    });
  }

  getTeachers(): void {
    this.teachers = this.teacherService.getTeacher();
  }
  updateTeacher(): void{
    this.teachers = this.teacherService.updateTeacher();
  }
  onSubmit() {
    console.log(this.teacherRegistrationForm.value);
    this.teacherService.addTeacher(this.teacherRegistrationForm.value);
  }
}
