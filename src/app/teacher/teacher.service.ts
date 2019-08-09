import {Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teachers =  [
    {teacherId: 1, teacherName: 'Teacher 1', address: 'no idea', email: 'chocolate@basihudaina.com', phoneNumber: 'asd', alternateEmails: [] }
  ];
  constructor() { }
  getTeacher() {
    return this.teachers;
  }

  addTeacher(teachers) {
    console.log('inside teacher Service', teachers);
    this.teachers.push(teachers);
  }

  updateTeacher(teachers) {
    const index = this.teachers.findIndex((deepali) => deepali.teacherId === teachers.teacherId);
    this.teachers[index] = teachers;
    console.log(index);
  }

}
