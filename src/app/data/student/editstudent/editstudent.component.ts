import { Component } from '@angular/core';
import { student } from './../../../../models/student';
import { StudentservicesService } from './../../../services/studentservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
  id:any
  student!:student;

constructor(private serv:StudentservicesService,private activeroute: ActivatedRoute,   private router: Router){


this.id=this.activeroute.snapshot.paramMap.get("id");
  this.serv.getbyid(this.id).subscribe(data=>{
this.student=data;
console.log(data);

  })
  }
   submit() {
     this.serv.update(this.student,this.id).subscribe(data=>{
       this.router.navigateByUrl("show-students");
     })
   }


}
