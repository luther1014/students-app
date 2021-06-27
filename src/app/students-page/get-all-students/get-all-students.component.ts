import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from '../message.service';
import { StudentDataService } from '../students-data.service';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit {
  students = [];

  @Output() studentWasSelected = new EventEmitter<any>();
  constructor(private studentDataService: StudentDataService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getStudents();
    this.messageService.addMessage('Getting all students...')
  }

  getStudents() {
    this.studentDataService.getStudents().subscribe(data => {
      this.students = data.students;
    })
  }

  onStudentSelected(student){
    console.log(student)
    this.studentWasSelected.emit(student)
  }
}
