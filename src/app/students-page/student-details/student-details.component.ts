import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student;
  percentage: number;

  constructor(private studentDataService: StudentDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.studentDataService.getStudent(id).subscribe(data => {
      this.student = data.student
    })
    this.studentDataService.getPercentage(id).subscribe(data => {
      console.log(data)
      this.percentage = data.percentage;
    })
  }

}
