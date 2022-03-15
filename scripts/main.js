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
const strBookShelf = [];
const bookShelf = [];

// Objects
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

if (!localStorage.strBookShelf) {
  // alert('empty');
}

function loadBooks() {
  const rebuiltBookShelf = localStorage.getItem('strBookShelf');
  // alert(JSON.parse(rebuiltBookShelf));
  for (let i = 0; i < rebuiltBookShelf.length; i += 1) {
    const currentBook = JSON.parse(rebuiltBookShelf[i]);
    const createdBook = document.createElement('div');
    createdBook.classList.add('book');
    const newBook = `
      <span class="title">${currentBook.title}</span>
      <br>
      <span class="author">${currentBook.author}</span>
      <br>
      <button class="remove" type="button">remove</button>
      <hr>
      `;
    createdBook.innerHTML += newBook;
    bookContainer.prepend(createdBook);
  }
}

loadBooks();

function clearFrontDesk() {
  // clear the slot that contains new added books from form
}

function clearShelf() {
  // Clear shelf array (id, title, author)
}

function clearFrontShelf() {
  // Clear html shelf (index.html)
}

function newBook(title,author) {
  // Push 'addBook' submission (title,author)
  // to the localstorage.frontDesk
  // N: 1.1. give it an ID number
  
}

function addNewBook(bookId) {
  //    append localstorage.shelf to localstorage.frontDesk's bottom
  //     1.2. clearShelf() > clear localstorage.shelf (id,title,author)
  //     1.3. copy localstorage.frontDesk to localstorage.shelf
  //     
  //     1.4. clearFrontShelf() (html shelf)
  //     1.5. displayShelf()
  //     1.5. clearFrontDesk()
}

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
  // books in html to the index,html
}

function addBook(book) {
  localStorage.clear();
  const intermediate1 = JSON.stringify(book);
  strBookShelf.push(intermediate1);
  localStorage.setItem('strBookShelf', strBookShelf);

  bookShelf.push(book);
  
  for (let i = 0; i < strBookShelf.length; i += 1) {
    const currentBook = JSON.parse(strBookShelf[i]);
    const createdBook = document.createElement('div');
    createdBook.classList.add('book');
    const newBook = `
      <span class="title">${currentBook.title}</span>
      <br>
      <span class="author">${currentBook.author}</span>
      <br>
      <button class="remove" type="button">remove</button>
      <hr>
      `;
    createdBook.innerHTML += newBook;
    bookContainer.prepend(createdBook);
  }

// Event Listeners & Logic

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(new Book(newTitle.value, newAuthor.value));
});
