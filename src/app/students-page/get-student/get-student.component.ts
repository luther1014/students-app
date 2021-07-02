import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "../student";
import { StudentDataService } from "../students-data.service";

@Component({
    selector: "app-get-student",
    templateUrl: "./get-student.component.html"
})

export class GetStudentComponent implements OnInit {

    student: Student;
    student_id: number;
    @Output() idWasEntered = new EventEmitter<any>();

    // constructor(private studentDataService: StudentDataService){

    // }
    constructor(private router: Router) {}

    ngOnInit() {
    
    }

    getStudent() {
        // this.studentDataService.getStudent(this.student_id).subscribe(data => {
        //     console.log(data)
        //     this.student = data.student;
        //     this.idWasEntered.emit(this.student);
        // })
        this.router.navigate(['students',this.student_id])
    }
}