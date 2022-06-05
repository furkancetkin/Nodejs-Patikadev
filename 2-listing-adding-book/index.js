const books = require("./data.js");

const addBook = (newBook) => {
  return new Promise((resolve, reject) => {
    console.log("New book has been adding...");

    if (newBook) {
      books.push(newBook);
      resolve("New book has been added with successfully !");
    } else {
      reject("New book can not be added");
    }
  });
};

const showBooks = (books) => {
  return new Promise((resolve, reject) => {
    console.log("Books has been printing...");

    if (books) {
      books.map((book) => console.log(book));
      resolve("Books has been printed with successfully !");
    } else {
      reject("Books can not be printed");
    }
  });
};

let newBook = {
  id: 5,
  title: "Effective JavaScript",
  author: "David Herman",
};

const process = async () => {
  try {
    // print list
    let bookList = await showBooks(books);
    console.log(bookList);

    // add book
    let addingBook = await addBook(newBook);
    console.log(addingBook);

    // print list
    let bookList2 = await showBooks(books);
    console.log(bookList2);
  } catch (error) {
    console.error(error);
  }
};

process();
