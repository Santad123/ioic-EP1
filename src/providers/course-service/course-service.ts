import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { Course } from '../../models/course';


@Injectable()
export class CourseServiceProvider {

  urlApi1:string = 'https://codingthailand.com/api/get_courses.php';
  urlApi2:string = 'http://www.khorkraktimber.com/json.php';
  urlApi3:string = 'http://headers.jsontest.com/';

  constructor(public http: HttpClient) {
   
  }

  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.urlApi3);
  }

  
}
