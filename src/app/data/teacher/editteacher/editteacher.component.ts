import { Component } from '@angular/core';

import { teacher } from './../../../../models/teacher';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherservicesService } from 'src/app/services/teacherservices.service';

@Component({
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.css']
})
export class EditteacherComponent {
id:any
teacher!:teacher

constructor(private serv:TeacherservicesService,private route:Router,private activeroute:ActivatedRoute){
this.id=this.activeroute.snapshot.paramMap.get("id")
this.serv.getbyid(this.id).subscribe(data=>{
  this.teacher=data;
})
}

submit(){
  this.serv.update(this.teacher,this.id).subscribe(data=>{
this.route.navigateByUrl("show-teachers")
  })
}
}
