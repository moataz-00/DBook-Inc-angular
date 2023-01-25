import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApifunctionservicesService } from './apifunctionservices.service';

import { student } from 'src/models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentservicesService extends ApifunctionservicesService<student> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/student")
   }
}
