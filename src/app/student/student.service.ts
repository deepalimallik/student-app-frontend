import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.url;
  }
  addStudent(studentData) {
    return this.http.post<any>(this.url + '/students', studentData);
  }
}
