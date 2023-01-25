import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { student } from './../../../../models/student';
import { StudentservicesService } from './../../../services/studentservices.service';

@Component({
  selector: 'app-poststudent',
  templateUrl: './poststudent.component.html',
  styleUrls: ['./poststudent.component.css']
})
export class PoststudentComponent {
message="";
student:student=new student;

constructor(
  private serv:StudentservicesService,
  private router:Router,
){}

submit(){
  this.serv.post(this.student).subscribe(data=>{
    this.router.navigateByUrl('/student-register');
    console.log(data);


  })
}


}
