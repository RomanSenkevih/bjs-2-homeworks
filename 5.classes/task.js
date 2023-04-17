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


