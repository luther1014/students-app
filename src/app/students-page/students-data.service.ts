export class StudentDataService {
    students = [
        {
          id: 101,
          name: "Alok",
          imgUrl: "http://robohash.org/501/?set=set2",
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
          imgUrl: "http://robohash.org/502/?set=set2",
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

    getStudents() {
        return this.students.slice();
    }
}