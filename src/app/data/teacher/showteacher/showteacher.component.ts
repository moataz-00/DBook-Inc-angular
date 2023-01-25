import { Component } from '@angular/core';
import { teacher } from 'src/models/teacher';
import { TeacherservicesService } from 'src/app/services/teacherservices.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showteacher',
  templateUrl: './showteacher.component.html',
  styleUrls: ['./showteacher.component.css']
})
export class ShowteacherComponent {
id:any
teacher!:teacher;

constructor(private serv:TeacherservicesService,private route:ActivatedRoute){
 this.id=this.route.snapshot.paramMap.get("id");

  this.serv.getbyid(this.id).subscribe(data=>{
    this.teacher=data
  })
}
}
