// DuenoFactory.js
class Dueno {
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

class DuenoFactory {
  static createDueno(bookData) {
    return new Dueno(
      bookData.author,
      bookData.book_pk,
      parseFloat(bookData.price),
      bookData.status,
      bookData.title,
    );
  }
}

export default DuenoFactory;
