/*
 0. Check curr.lclstrg:
  0.1. (if any stored books){ clear bookShelf > append curr.lclstrg > clear tmp.lclstrg }
  0.2. (else) {clear bookshelf, clear tmp.lclstrg}
 1. addBook > tmp.lclstrg
  1.1. append curr.lclstrg -> tmp.lclstrg's bottom
  1.2. clear curr.lclstrg > clear shelf
  1.3. copy tmp.lclstrg to curr.lclstrg > show it on bookshelf
  1.4. clear tmp.lclstrg
2. removeBook > copy  to tmp.lclstrg
  2.1. compare it to

*/
// Query Selectors
const addButton = document.getElementById('add');
const newTitle = document.getElementById('newTitle');
const newAuthor = document.getElementById('newAuthor');
const bookContainer = document.getElementById('book-container');

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
      <hr>`;
    createdBook.innerHTML += newBook;
    bookContainer.prepend(createdBook);
  }

  // const intermediate3 = JSON.parse(intermediate1);
  // bookContainer.prepend(createdBook);

  // bookContainer.prepend(createdBook);
}

// const bookShelf = [new Book('Aaron is Great', 'Aaron Keegan')];

// function addBook(book) {
//   const createdBook = document.createElement('div');
//   createdBook.classList.add('book');
//   const newBook = `
//       <span class="title">${book.title}</span>
//       <br>
//       <span class="author">${book.author}</span>
//       <br>
//       <button class="remove" type="button">remove</button>
//       <hr>`;
//   createdBook.innerHTML += newBook;
//   bookContainer.appendChild(createdBook);
// }

// addBook(new Book('blah', 'blah'));

// Event Listeners & Logic

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(new Book(newTitle.value, newAuthor.value));
});
