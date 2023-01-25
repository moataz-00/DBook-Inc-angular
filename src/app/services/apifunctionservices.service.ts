import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class ApifunctionservicesService<T> {

  constructor(public http:HttpClient, public configurl:string) { }
//get all
  get():Observable<T>{
    return this.http.get<T>(this.configurl);
  }

  //getonestudent
  getbyid(id:any):Observable<T>{
    return this.http.get<T>(this.configurl+`/${id}`);
  }

  //post
  post(model:T):Observable<T>{
    return this.http.post<T>(this.configurl,model)
  }

//delete
  delete(id:any): Observable<Object>{
    return this.http.delete(this.configurl+`/${id}`)
   }

   //update
update(model:T,id:any):Observable<T>{
  return this.http.put<T>(this.configurl+`/${id}`,model);
}
}
