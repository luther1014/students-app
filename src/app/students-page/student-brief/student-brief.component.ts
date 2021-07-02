import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-brief',
  templateUrl: './student-brief.component.html',
  styleUrls: ['./student-brief.component.css']
})
export class StudentBriefComponent implements OnInit {
  // student = {
  //   id: 101,
  //   name: 'John Doe',
  //   address: 'Bangalore',
  //   imgUrl: 'https://i.pravatar.cc/300'
  // }
  @Input() student
  @Output() studentSelected = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.router.navigate(['students',this.student.id]);
    this.studentSelected.emit();
  }

  onEdit() {
    this.router.navigate(['update-student',this.student.id]);
  }

}
