function students(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}
var students = [
    new students("John", "Doe", 20),
    new students("Kevin", "James", 23),
    new students("Lebron", "Jordan", 6),
]
console.log("Hello, my name is", students[1].firstname, students[1].lastname, " and I'm", students[1].age ,"years old.")