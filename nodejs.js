let student = {
    id: 2500030287,
    Name: "Gokul",
    Course: "FEDFW",
    Year: 2,
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};

console.log("student Id : ", student.id)
console.log("student Name : ", student.Name)
console.log("student Course : ", student.Course)
console.log("student Year : ", student.Year)
console.log("student address : ", student.address)
console.log("student street : ", student.address.street)
console.log("student city : ", student.address.city)

function Student(id, Name, Grade) {
    this.id = id;
    this.Name = Name;
    this.Grade = Grade;
}
let student1 = new Student(2500030287, "Gokul", "A");
let student2 = new Student(2500030288, "John", "B");

console.log("student1 Id : ", student1.id)
console.log("student1 Name : ", student1.Name)
console.log("student1 Grade : ", student1.Grade)

console.log("student2 Id : ", student2.id)
console.log("student2 Name : ", student2.Name)
console.log("student2 Grade : ", student2.Grade)

class Employee {
    constructor(id, Name, designation, Salary) {
        this.id = id;
        this.Name = Name;
        this.designation = designation;
        this.Salary = Salary;
    }
    display() {
        console.log("Employee Id : ", this.id)
        console.log("Employee Name : ", this.Name)
        console.log("Employee designation : ", this.designation)
        console.log("Employee Salary : ", this.Salary)
    }
}
let employee1 = new Employee(5892, "Venkat", "Manager", 50000);
let employee2 = new Employee(5893, "Ravi", "Developer", 40000);

employee1.display();
employee2.display();

student.Grade = "O";
console.log("student Information after updating grade : ")
console.log(student)

delete student.address;
console.log("student Information after deleting address : ")
console.log(student)

let {id, Name, Grade} = student;
console.log("Destructuring student1 object : ")
console.log("student1 Id : ", id)
console.log("student1 Name : ", Name)
console.log("student1 Grade : ", Grade)