import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit {
  students = [
      {
        id: 101,
        name: "Alok",
        imgUrl: "http://robohash.org/alok",
        address: "Bangalore",
        email: "alok101@gmail.com",
        marks: {
          Physics: 85,
          Chemistry: 45,
          Mathematics: 66,
          Biology: 88,
          English: 75
        }
      },
      {
        id: 102,
        name: "Aditi",
        imgUrl: "http://robohash.org/aditi",
        address: "Delhi",
        email: "aditi102@gmail.com",
        marks: {
          Physics: 33,
          Chemistry: 80,
          Mathematics: 88,
          Biology: 73,
          English: 79
        }
      }
    
  ]

  @Output() studentWasSelected = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onStudentSelected(student){
    console.log(student)
    this.studentWasSelected.emit(student)
  }
}
