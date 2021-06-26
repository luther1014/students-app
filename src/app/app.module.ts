import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { StudentBriefComponent } from './students-page/student-brief/student-brief.component';
import { StudentDetailsComponent } from './students-page/student-details/student-details.component';
import { GetAllStudentsComponent } from './students-page/get-all-students/get-all-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsPageComponent,
    StudentBriefComponent,
    StudentDetailsComponent,
    GetAllStudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
