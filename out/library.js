"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library = /** @class */ (function () {
    function Library() {
        var _this = this;
        this.AddBook = function (bookTitle, bookAuthor) {
            var book = _this.BookExists(bookTitle, bookAuthor);
            if (book !== undefined) {
                book.count++;
            }
            else {
                var newBook = {
                    title: bookTitle,
                    author: bookAuthor,
                    count: 1,
                };
                bookDatabase.push(newBook);
            }
        };
        this.BookExists = function (bookTitle, bookAuthor) {
            var book = bookDatabase.filter(function (x) { return x.title == bookTitle && x.author == bookAuthor; });
            if (book.length > 0)
                return book[0];
        };
        this.GetBook = function (bookQuery) {
            var book = bookDatabase.filter(function (x) { return x.title == bookQuery || x.author == bookQuery; });
            if (book !== undefined) {
                return book;
            }
            else
                return [];
        };
    }
    Library.prototype.DeleteBook = function (bookTitle, bookAuthor) {
        var book = this.BookExists(bookTitle, bookAuthor);
        if (book.count > 1) {
            book.count--;
        }
        else {
            var index = bookDatabase.indexOf(book);
            if (index > -1) {
                bookDatabase.splice(index, 1);
                return true;
            }
        }
        return false;
    };
    Library.prototype.GetAllBooks = function () {
        return bookDatabase;
    };
    return Library;
}());
exports.default = Library;
var bookDatabase = [
    {
        title: "Dance Dance Dance",
        author: "Haruki Murakami",
        count: 5,
    },
    { title: "Gone with the Wind", author: "Margaret Mitchell", count: 2 },
    { title: "No Highway", author: "Nevil Shute", count: 1 },
];
//# sourceMappingURL=library.js.map