export default class Library {
  AddBook = (bookTitle: string, bookAuthor: string) => {
    var book = this.BookExists(bookTitle, bookAuthor);
    if (book !== undefined) {
      book.count++;
    } else {
      var newBook = {
        title: bookTitle,
        author: bookAuthor,
        count: 1,
      };
      bookDatabase.push(newBook);
    }
  };

  BookExists = (bookTitle: string, bookAuthor: string) => {
    let book = bookDatabase.filter(
      (x) => x.title == bookTitle && x.author == bookAuthor
    );
    if (book.length > 0) return book[0];
  };

  DeleteBook(bookTitle: string, bookAuthor: string): Boolean {
    var book = this.BookExists(bookTitle, bookAuthor);
    if (book.count > 1) {
      book.count--;
    } else {
      let index = bookDatabase.indexOf(book);
      if (index > -1) {
        bookDatabase.splice(index, 1);
        return true;
      }
    }
    return false;
  }

  GetBook = (bookQuery: string) => {
    var book = bookDatabase.filter(
      (x) => x.title == bookQuery || x.author == bookQuery
    );

    if (book !== undefined) {
      return book;
    } else return [];
  };

  GetAllBooks() {
    return bookDatabase;
  }
}
let bookDatabase: { title: string; author: string; count: number }[] = [
  {
    title: "Dance Dance Dance",
    author: "Haruki Murakami",
    count: 5,
  },
  { title: "Gone with the Wind", author: "Margaret Mitchell", count: 2 },
  { title: "No Highway", author: "Nevil Shute", count: 1 },
];
