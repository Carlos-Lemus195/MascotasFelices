// BookFactory.js
class Book {
  constructor(author, book_pk, price, status, title) {
    this.author = author;
    this.book_pk = book_pk;
    this.price = price;
    this.status = status;
    this.title = title;
  }
  toString() {
    return `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Status: ${this.status}`;
  }
  getSummary() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
}

class BookFactory {
  static createBook(bookData) {
    return new Book(
      bookData.author,
      bookData.book_pk,
      parseFloat(bookData.price),
      bookData.status,
      bookData.title,
    );
  }
}

export default BookFactory;
