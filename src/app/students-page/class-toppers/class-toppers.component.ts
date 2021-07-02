import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-class-toppers',
  templateUrl: './class-toppers.component.html',
  styleUrls: ['./class-toppers.component.css']
})
export class ClassToppersComponent implements OnInit {

  toppers = [];
  constructor(private studentDataService: StudentDataService) { }

  ngOnInit(): void {
    this.studentDataService.getClassToppers().subscribe(data => {
      data.class_toppers.map(x => {
        this.toppers.push(x)
      })
      console.log(this.toppers)
    })
  }

}
