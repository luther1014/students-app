import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { StudentDataService } from './students-data.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css'],
  providers: [StudentDataService, MessageService]
})
export class StudentsPageComponent implements OnInit {

  studentSelected;
  messages = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getAllMessages();
  }


}
