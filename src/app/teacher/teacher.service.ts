import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  addTeacher(teacherData) {
    return this.http.post<any>(this.url + '/teacher', teacherData);
  }
}
