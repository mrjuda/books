/*
 0. Check localstorage.shelf:
  0.1. (if any stored books){ clear bookShelf > append localstorage.shelf >
     clear localstorage.frontDesk }
     >>  dispĺayBooks();
  0.2. (else) {clear localstorage.shelf,
    clear localstorage.frontDesk,
    clear webpage (clearFrontShelf)}
  1. addBook > localstorage.frontDesk
  1.1. append localstorage.shelf -> localstorage.frontDesk's bottom
  1.2. clear localstorage.shelf > clear page
  1.3. copy localstorage.frontDesk to localstorage.shelf
  1.4. copy localstorage.shelf to frontBookShelf (html shelf)
  1.5. clear localstorage.frontDesk

  2. removeBook > copy  to tmp.lclstrg
  2.1. compare it to

*/
// Query Selectors
const addButton = document.getElementById('add');
const newTitle = document.getElementById('newTitle');
const newAuthor = document.getElementById('newAuthor');
const bookContainer = document.getElementById('book-container');
const frontShelf = document.getElementById('frontShelf');
const frontDesk = [];
const shelf = [];
// const strBookShelf = [];
// const bookShelf = [];

// Objects
class Book {
  title;
  
  author;
}

class StrShelf {
}

//delete once refactored
class LocalStorage {
  shelf;

  getItem() {
    return this.shelf;
  }
}

let bookshelf = new StrShelf();

// function loadBooks() {
//   const rebuiltBookShelf = localStorage.getItem('strBookShelf');
  // alert(JSON.parse(rebuiltBookShelf));
//   for (let i = 0; i < rebuiltBookShelf.length; i += 1) {
//     const currentBook = JSON.parse(rebuiltBookShelf[i]);
//     const createdBook = document.createElement('div');
//     createdBook.classList.add('book');
//     const newBook = `
//       <span class="title">${currentBook.title}</span>
//       <br>
//       <span class="author">${currentBook.author}</span>
//       <br>
//       <button class="remove" type="button">remove</button>
//       <hr>
//       `;
//     createdBook.innerHTML += newBook;
//     bookContainer.prepend(createdBook);
//   }
// }

// loadBooks();

// Event Listeners & Logic

function clearFrontDesk() {
  // clear the slot that contains new added books from form
}

function clearShelf() {
  // Clear shelf array (id, title, author)
}

function clearFrontShelf() {
  // Clear html shelf (index.html)
}

function pushToStorage(obj) {
  const stringify = JSON.stringify(obj);
  //change this line below to localStorage.setItem('shelf', stringify);
  localStorage.setItem('strShelf', stringify);
}

function updateShelf () {
  bookshelf = new StrShelf();
  let counter = 0;
  for(let i = 0; i < shelf.length; i += 1) {
    counter += 1;
    shelf[i].id = counter;
  }
  for (let i = 0; i < shelf.length; i += 1) {
    const id = shelf[i].id;
    bookshelf[`${id}`] = shelf[i];
  }
  pushToStorage(bookshelf);
}

function newBook(title, author) {
  // Push 'addBook' submission (title,author)
  // to the localstorage.frontDesk
  // N: 1.1. give it an ID number
  bookshelf = new StrShelf();
  const book = new Book();
  book.title = title;
  book.author = author;
  shelf.unshift(book);
  updateShelf();
}

// function addNewBook(bookId) {
  //    append localstorage.shelf to localstorage.frontDesk's bottom
  //     1.2. clearShelf() > clear localstorage.shelf (id,title,author)
  //     1.3. copy localstorage.frontDesk to localstorage.shelf
  //     1.4. clearFrontShelf() (html shelf)
  //     1.5. displayShelf()
  //     1.5. clearFrontDesk()
// }

function displayBook(bookId) {
  // display ONE book only, by its ID or something else
  // this function should be called several times by the
  // displayShelf() function
  // this function returns 1(one) book's html part
  // Receives an ID > looks for the book into the shelf
  // Generates html for that book > returns that string
}

function displayShelf() {
  // Pulls displayBooks strings (html parts) into a div
  // pushes it to the index.html
  // this function pushes an array of
  // books in html to the index.html
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  newBook(newTitle.value, newAuthor.value);
});

// function addBook(book) {
//   localStorage.clear();
//   const intermediate1 = JSON.stringify(book);
//   strBookShelf.push(intermediate1);
//   localStorage.setItem('strBookShelf', strBookShelf);
//   bookShelf.push(book);
//   for (let i = 0; i < strBookShelf.length; i += 1) {
//     const currentBook = JSON.parse(strBookShelf[i]);
//     const createdBook = document.createElement('div');
//     createdBook.classList.add('book');
//     const newBook = `
//       <span class="title">${currentBook.title}</span>
//       <br>
//       <span class="author">${currentBook.author}</span>
//       <br>
//       <button class="remove" type="button">remove</button>
//       <hr>
//       `;
//     createdBook.innerHTML += newBook;
//     bookContainer.prepend(createdBook);
//   }
// }