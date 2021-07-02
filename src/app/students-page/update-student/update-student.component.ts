import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marks } from '../marks';
import { Student } from '../student';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
  
})
export class UpdateStudentComponent implements OnInit {
  @Input() model = new Student(105,'Anushka', 'Gurgaon', 'anu105@gmail.com', 'http://robohash.org/105/?set=set2',new Marks(75,65,33,85,90));
  studentUpdated = false;
  id: number;

  constructor(private studentDataService: StudentDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.studentDataService.getStudent(this.id).subscribe(data => {
      this.model = data.student;
    })
  }


  updateStudent() {
    this.studentDataService.updateStudent(this.model).subscribe(data => {
      console.log(data);
      this.studentUpdated = true;
      setTimeout(()=>{
        this.router.navigate(['students',this.model.id])
      }, 5000)

    })
  }
}
