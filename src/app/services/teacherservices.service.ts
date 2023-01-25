import { Injectable } from '@angular/core';
import { ApifunctionservicesService } from './apifunctionservices.service';
import { HttpClient } from '@angular/common/http';
import { teacher } from 'src/models/teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherservicesService extends ApifunctionservicesService<teacher> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/teacher")
   }
}
