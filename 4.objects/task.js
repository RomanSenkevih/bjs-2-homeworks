function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }

  let student3 = new Student("Ника", "женский", 19);
  let student4 = new Student("Роман", "мужской", 109);

  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }

  Student.prototype.addMarks = function (...marks) {
    'marks' in this ? this.marks.push(...marks) : 0;
 }

 Student.prototype.getAverage = function () {
  if('marks' in this === false || this.marks.length === 0){
    return 0;
  }else{
    return this.marks.reduce((acc, element) => acc + element, 0) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
