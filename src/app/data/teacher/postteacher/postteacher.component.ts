import { Component } from '@angular/core';
import { teacher } from './../../../../models/teacher';
import { TeacherservicesService } from './../../../services/teacherservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postteacher',
  templateUrl: './postteacher.component.html',
  styleUrls: ['./postteacher.component.css']
})
export class PostteacherComponent {
message="";
teacher:teacher=new teacher;

constructor(
  private serv:TeacherservicesService, private route:Router
){}


submit(){
  this.serv.post(this.teacher).subscribe(data=>{
    this.route.navigateByUrl('teacher-register')
    console.log(data);

  })
}
}
