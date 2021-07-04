import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-subject-pass',
  templateUrl: './subject-pass.component.html',
  styleUrls: ['./subject-pass.component.css']
})
export class SubjectPassComponent implements OnInit {

  subject_name = '';
  subject: any;
  constructor(private studentDataService: StudentDataService) { }

  ngOnInit(): void {
  }

  getSubject() {
    this.studentDataService.getSubjectPercentage(this.subject_name).subscribe(data => {
      this.subject = data;
    })
  }

}
