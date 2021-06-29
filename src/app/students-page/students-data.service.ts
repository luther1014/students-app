import { HttpClient } from "@angular/common/http"; 
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class StudentDataService {
    // students = [
    //     {
    //       id: 101,
    //       name: "Alok",
    //       imgUrl: "http://robohash.org/501/?set=set2",
    //       address: "Bangalore",
    //       email: "alok101@gmail.com",
    //       marks: {
    //         Physics: 85,
    //         Chemistry: 45,
    //         Mathematics: 66,
    //         Biology: 88,
    //         English: 75
    //       }
    //     },
    //     {
    //       id: 102,
    //       name: "Aditi",
    //       imgUrl: "http://robohash.org/502/?set=set2",
    //       address: "Delhi",
    //       email: "aditi102@gmail.com",
    //       marks: {
    //         Physics: 33,
    //         Chemistry: 80,
    //         Mathematics: 88,
    //         Biology: 73,
    //         English: 79
    //       }
    //     }
      
    // ]

    students = [];

    constructor(private http: HttpClient){}

    getStudents(): Observable<any> {
        
        return this.http.get<any>('http://localhost:8000/students/')
    }

    getStudent(id: number): Observable<any> {

        return this.http.get<any>('http://localhost:8000/students/'+ +id)
    }
}