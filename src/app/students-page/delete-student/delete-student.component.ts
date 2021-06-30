import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  student_id: number;
  constructor(private studentDataService: StudentDataService) { }
  studentDeleted = false;
  ngOnInit(): void {
  }

  deleteStudent(){
    this.studentDataService.deleteStudent(this.student_id).subscribe(data => {
      console.log(data)
      this.studentDeleted = true;
    })
  }
}
