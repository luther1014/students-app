import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-subject-avg',
  templateUrl: './subject-avg.component.html',
  styleUrls: ['./subject-avg.component.css']
})
export class SubjectAvgComponent implements OnInit {

  avg = [];
  constructor(private studentDataService: StudentDataService) { }

  ngOnInit(): void {
    this.studentDataService.getSubjectAvg().subscribe(data => {
      this.avg = data.Avg_scores;
      console.log(this.avg)
    })
  }


}
