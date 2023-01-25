import { Injectable } from '@angular/core';
import { ApifunctionservicesService } from './apifunctionservices.service';

import { HttpClient } from '@angular/common/http';
import { users } from './../../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService extends ApifunctionservicesService<users> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/users")
   }
}
