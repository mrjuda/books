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

function pushToStorage(obj) {
  const stringify = JSON.stringify(obj);
  localStorage.setItem('strShelf', stringify);
}

function displayBook(title, author, id) {
  return `
      <span class="title">${title}</span>
      <br>
      <span class="author">${author}</span>
      <br>
      <button class="removeButton" id="${id}" type="button">remove</button>
      <hr>
      `;
}

//for loop addEventListener => query selector 1, 2,3 ,4 ,5 ,6

function pullFromStorage() {
  const parsed = JSON.parse(localStorage.getItem('strShelf'));
  let counter = 1;
  const preShelf = [];
  for (let i = 0; i < shelf.length; i += 1) {
    const parsedBook = parsed[`${counter}`];
    counter += 1;
    preShelf.unshift(displayBook(parsedBook.title, parsedBook.author, counter));
  }
  const createdBook = document.createElement('div');
  createdBook.classList.add('book');
  for (let i = 0; i < preShelf.length; i += 1) {
    createdBook.innerHTML = preShelf[i];
    frontShelf.prepend(createdBook);
  }
}

function updateShelf() {
  bookshelf = new StrShelf();
  let counter = 0;
  for (let i = 0; i < shelf.length; i += 1) {
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

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  newBook(newTitle.value, newAuthor.value);
  pullFromStorage();
  newTitle.value = '';
  newAuthor.value = '';
});

function removeBook(id) {
  bookshelf = new StrShelf();
  for (let i = 1; i <= shelf.length; i += 1) {
    if (shelf[i - 1].id === parseInt(id, 10)) {
      shelf.splice(i - 1, 1);
      updateShelf();
    }
  }
}