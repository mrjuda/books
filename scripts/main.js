// Query Selectors
const addButton = document.getElementById('add');
const removeButton = document.querySelectorAll('removeButton');
const newTitle = document.getElementById('newTitle');
const newAuthor = document.getElementById('newAuthor');
const frontShelf = document.getElementById('frontShelf');
const frontDesk = [];
const shelf = [];

// Objects
class Book {
  title;

  author;
}

class StrShelf {
}

let bookshelf = new StrShelf();

// Event Listeners & Logic

function clearFrontDesk() {
  // clear the slot that contains new added books from form
  frontDesk = [];
}

function clearShelf() {
  // Clear shelf array (id, title, author)
  shelf = [];
}

function clearFrontShelf() {
  // Clear html shelf (index.html)
  frontShelf = [];
}

function pushToStorage(obj) {
  const stringify = JSON.stringify(obj);
  //change this line below to localStorage.setItem('shelf', stringify);
  localStorage.setItem('strShelf', stringify);
}

function pullFromStorage() {
  let parsed = JSON.parse(localStorage.getItem('strShelf'));
  let counter = 1;
  const preShelf = [];
  for(let i = 0; i < shelf.length; i += 1){
    let parsedBook = parsed[`${counter}`];
    counter += 1;
    preShelf.unshift(displayBook(parsedBook.title, parsedBook.author));
  }
  const createdBook = document.createElement('div');
  createdBook.classList.add('book');
  for(i = 0; i < preShelf.length; i += 1){
    createdBook.innerHTML = preShelf[i];
    frontShelf.prepend(createdBook);
  }
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
  bookshelf = new StrShelf();
  const book = new Book();
  book.title = title;
  book.author = author;
  shelf.unshift(book);
  updateShelf();
}

function displayBook(title, author) {
  return `
      <span class="title">${title}</span>
      <br>
      <span class="author">${author}</span>
      <br>
      <button class="removeButton" type="button">remove</button>
      <hr>
      `;
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  newBook(newTitle.value, newAuthor.value);
  pullFromStorage();
  newTitle.value = '';
  newAuthor.value = '';
});
