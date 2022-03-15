// Query Selectors
const newTitle = document.getElementById('newTitle');
const newAuthor = document.getElementById('newAuthor');
const frontShelf = document.getElementById('frontShelf');
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

function pullFromStorage() {
  const parsed = JSON.parse(localStorage.getItem('strShelf'));
  let counter = shelf.length;
  const preShelf = [];
  for (let i = 0; i < shelf.length; i += 1) {
    const parsedBook = parsed[`${counter}`];
    const tempShelf = displayBook(parsedBook.title, parsedBook.author, counter);
    preShelf.unshift(tempShelf);
    preShelf[i].id = counter;
    counter -= 1;
  }

  frontShelf.innerHTML = '';

  for (let i = 0; i < preShelf.length; i += 1) {
    const createdBook = document.createElement('div');
    createdBook.classList.add('book');
    createdBook.innerHTML = preShelf[i];
    createdBook.id = i + 1;
    frontShelf.appendChild(createdBook);
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
    // GIVES THE BOOK OBJ AN ID #NUMBER
    bookshelf[`${shelf[i].id}`] = shelf[i];
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

let removeButton = document.querySelectorAll('.removeButton');

function setRemoveListeners() {
  removeButton = document.querySelectorAll('.removeButton');
  removeButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      removeBook(e.target.id);
    });
  });
}

function removeBook(id) {
  bookshelf = new StrShelf();

  frontShelf.innerHTML = '';

  for (let i = 1; i <= shelf.length; i += 1) {
    if (shelf[i - 1].id === parseInt(id, 10)) {
      shelf.splice(i - 1, 1);
      updateShelf();
    }
    pullFromStorage();
    setRemoveListeners();
  }
}

const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  newBook(newTitle.value, newAuthor.value);
  pullFromStorage();
  newTitle.value = '';
  newAuthor.value = '';
  setRemoveListeners();
});
