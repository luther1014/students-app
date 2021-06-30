import { Component, OnInit } from '@angular/core';
import { Marks } from '../marks';
import { Student } from '../student';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
  
})
export class UpdateStudentComponent implements OnInit {
  model = new Student(105,'Anushka', 'Gurgaon', 'anu105@gmail.com', 'http://robohash.org/105/?set=set2',new Marks(75,65,33,85,90));
  studentUpdated = false;

  constructor(private studentDataService: StudentDataService) { }

  ngOnInit(): void {
  }

  updateStudent() {
    this.studentDataService.updateStudent(this.model).subscribe(data => {
      console.log(data);
      this.studentUpdated = true;

    })
  }
}
