import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { StudentBriefComponent } from './students-page/student-brief/student-brief.component';
import { StudentDetailsComponent } from './students-page/student-details/student-details.component';
import { GetAllStudentsComponent } from './students-page/get-all-students/get-all-students.component';
import { GetStudentComponent } from './students-page/get-student/get-student.component';
import { FormsModule } from '@angular/forms';
import { NewStudentComponent } from './students-page/new-student/new-student.component';
import { DeleteStudentComponent } from './students-page/delete-student/delete-student.component';
import { UpdateStudentComponent } from './students-page/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsPageComponent,
    StudentBriefComponent,
    StudentDetailsComponent,
    GetAllStudentsComponent,
    GetStudentComponent,
    NewStudentComponent,
    DeleteStudentComponent,
    UpdateStudentComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
