class PrintEditionItem {
    _state = 100;
    type = null;
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
    }

    set state(bookСondition){
      if(bookСondition < 0){
        this._state = 0;
      }else if(bookСondition > 100){
        this._state = 100;
      }else{
        this._state = bookСondition;
      }
    }

    get state(){
      return this._state;
    }

     fix(){
       this.state = this.state * 1.5;
    }
  }

  class Magazine extends PrintEditionItem {
    type = "magazine";
  }

  class Book extends PrintEditionItem {
    type = "book";
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
    }
  }

  class NovelBook extends Book {
    type = "novel";
  }

  class FantasticBook extends Book {
    type = "fantastic";    
  }

  class DetectiveBook extends Book {
     type = "detective";   
  }

  class Library {
    books = [];
    constructor(name) {
      this.name = name;
    }

    addBook(book){
      if(book.state > 30){
        this.books.push(book);
      }
    }

    findBookBy(type, value){
      let arrayGender = this.books.findIndex((element) => element[type] === value);
      if(arrayGender >= 0){
        return this.books[arrayGender];
      }else{
         return null;
      }
    }

    giveBookByName(bookName) {
      let arrayName = this.books.findIndex((element) => element.name === bookName);
      let book = {};
      if(arrayName >= 0){
       this.books[arrayName]
       book = this.books[arrayName]
       this.books.length += -1;
       return book; 
      }else{
         return null;
      }
    }

  }
// ------------------------------Задача 3. Журнал успеваемости *------------------------------------------------

class Student {
  marks = {};
  constructor(name) {
    this.name = name
  } 

  addMark(grade, itemName){
    let x = grade > 2 && grade < 6;
    if(itemName in this.marks != true && x){
      this.marks[itemName] = [];
    }

    if(x){
      this.marks[itemName].push(grade);
    }else{return 0}
  }

  getAverageBySubject(itemName){
    if(itemName in this.marks){
      return this.marks[itemName].reduce((acc, element) => acc + element, 0) / this.marks[itemName].length
    }else{return 0}
  }

  getAverage(){
    let grade = Object.keys(this.marks);
    let result = 0;
    for(let i = 0; i < grade.length; i++){
      result += this.getAverageBySubject(grade[i]);
    }
    return grade.length === 0 ?  result = 0 : result / grade.length;
  }
}

  



// let student3 = new Student("Ника", "женский", 19);
// let student4 = new Student("Роман", "мужской", 109);

// Student.prototype.setSubject = function (subjectName) {
//   this.subject = subjectName;
// }

// Student.prototype.addMarks = function (...marks) {
//   'marks' in this ? this.marks.push(...marks) : 0;
// }

// Student.prototype.getAverage = function () {
// if('marks' in this === false || this.marks.length === 0){
//   return 0;
// }else{
//   return this.marks.reduce((acc, element) => acc + element, 0) / this.marks.length;
// }
// }

// Student.prototype.exclude = function (reason) {
// delete this.marks;
// delete this.subject;
// this.excluded = reason;
// }
