import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from './../../../../models/student';
import { StudentservicesService } from './../../../services/studentservices.service';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css']
})
export class ShowstudentComponent {
id:any;
student!:student;
constructor(private serv:StudentservicesService,private activeroute:ActivatedRoute){
  this.id=this.activeroute.snapshot.paramMap.get("id");
  this.serv.getbyid(this.id).subscribe(data=>{
    this.student=data
  })
}
}
