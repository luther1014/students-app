import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { Marks } from '../marks';
import { Student } from '../student';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor(private studentDataService: StudentDataService, private router: Router) { }

  model = new Student(105,'Anushka', 'Gurgaon', 'anu105@gmail.com', 'http://robohash.org/105/?set=set2',new Marks(75,65,33,85,90));
  studentCreated = false;

  newStudent() {
    this.studentDataService.createStudent(this.model).subscribe(data => {
      console.log(data);
      this.studentCreated = true
      setTimeout(()=>{
        this.router.navigate(['students'])
      },5000);
    })
  }

  ngOnInit(): void {
  }

}
