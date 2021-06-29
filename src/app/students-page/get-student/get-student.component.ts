import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { StudentDataService } from "../students-data.service";

@Component({
    selector: "app-get-student",
    templateUrl: "./get-student.component.html"
})

export class GetStudentComponent implements OnInit {

    student1: any;
    student_id: number;
    @Output() idWasEntered = new EventEmitter<any>();

    constructor(private studentDataService: StudentDataService){

    }

    ngOnInit() {
    
    }

    getStudent() {
        this.studentDataService.getStudent(this.student_id).subscribe(data => {
            console.log(data)
            this.student1 = data.student;
            this.idWasEntered.emit(this.student1);
        })
    }
}