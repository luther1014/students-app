import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ClassToppersComponent } from "./students-page/class-toppers/class-toppers.component";
import { DeleteStudentComponent } from "./students-page/delete-student/delete-student.component";
import { GetAllStudentsComponent } from "./students-page/get-all-students/get-all-students.component";
import { GetStudentComponent } from "./students-page/get-student/get-student.component";
import { NewStudentComponent } from "./students-page/new-student/new-student.component";
import { StudentDetailsComponent } from "./students-page/student-details/student-details.component";
import { StudentsHomeComponent } from "./students-page/students-home/students-home.component";
import { UpdateStudentComponent } from "./students-page/update-student/update-student.component";

const routes: Routes = [
    {path: '', component: StudentsHomeComponent},
    {path: 'students/:id', component: StudentDetailsComponent},
    {path: 'students', component: GetAllStudentsComponent},
    {path: 'create-student', component: NewStudentComponent},
    {path:'get-student', component: GetStudentComponent},
    {path: 'update-student/:id', component: UpdateStudentComponent},
    {path: 'delete-student', component: DeleteStudentComponent},
    {path: 'class-toppers', component: ClassToppersComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
        
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}