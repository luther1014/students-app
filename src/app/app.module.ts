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
import { StudentsHomeComponent } from './students-page/students-home/students-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentDataService } from './students-page/students-data.service';
import { MessageService } from './students-page/message.service';
import { ClassToppersComponent } from './students-page/class-toppers/class-toppers.component';

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
    UpdateStudentComponent,
    StudentsHomeComponent,
    PageNotFoundComponent,
    HomeComponent,
    ClassToppersComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StudentDataService,
  MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
