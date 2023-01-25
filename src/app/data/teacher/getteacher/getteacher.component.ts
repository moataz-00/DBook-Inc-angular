import { Component } from '@angular/core';
import { TeacherservicesService } from 'src/app/services/teacherservices.service';

import { teacher } from './../../../../models/teacher';


@Component({
  selector: 'app-getteacher',
  templateUrl: './getteacher.component.html',
  styleUrls: ['./getteacher.component.css']
})
export class GetteacherComponent {
alldata:teacher[]=[]
constructor(private sev:TeacherservicesService,){
  this.sev.get().subscribe((data:any)=>{
    this.alldata=data
  })
}

ondelete(id:any){
  this.sev.delete(id).subscribe(data=>{
    location.reload();
  })
}
}
