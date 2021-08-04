import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable, of} from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:5000/courses'
  constructor(private http:HttpClient) { }

  getCourses(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
}
