import { Component } from '@angular/core';
import { StudentservicesService } from 'src/app/services/studentservices.service';
import { student } from './../../../../models/student';

@Component({
  selector: 'app-getstudent',
  templateUrl: './getstudent.component.html',
  styleUrls: ['./getstudent.component.css']
})
export class GetstudentComponent {
alldata:student[]=[];
constructor(private serv:StudentservicesService,){
this.serv.get().subscribe((data:any)=>{
  this.alldata=data;
});}

ondelete(id:any){
this.serv.delete(id).subscribe(data=>{
  location.reload();
})
}

}
