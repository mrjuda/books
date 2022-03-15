// 1 - > add a book
// - pushes to an array
// - Array builds the LocalStorage Object
// - Paint the books on the page based on the order of the books in LocalStorage

// 2 - Remove Book
//   - remove from array
//   -rebuild localstorage
//    -repaint the whole screen

// Query Selectors
const addButton = document.getElementById('add');
// const removeButton = document.querySelectorAll('removeButton');
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
    preShelf.unshift(displayBook(parsedBook.title, parsedBook.author, counter));
    preShelf[i].id = counter;
    console.log(preShelf[i].id);
    counter += 1;
  }
  const createdBook = document.createElement('div');
  createdBook.classList.add('book');
  for (let i = 0; i < preShelf.length; i += 1) {
    createdBook.innerHTML = preShelf[i];
    createdBook.id = i + 1;
    frontShelf.prepend(createdBook);
    // push to array document.getElementByID(#line57);
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
let removeButton = document.querySelectorAll('.removeButton');

function removeBook(id) {
  frontShelf.innerHTML = '';
  bookshelf = new StrShelf();
  for (let i = 1; i <= shelf.length; i += 1) {
    if (shelf[i - 1].id === parseInt(id, 10)) {
      shelf.splice(i - 1, 1);
      updateShelf();
    }
  }
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  newBook(newTitle.value, newAuthor.value);
  pullFromStorage();
  newTitle.value = '';
  newAuthor.value = '';
  removeButton = document.querySelectorAll('.removeButton');
  removeButton.forEach(button => {
    button.addEventListener('click', (e) => {
      // let bookToBeRemoved = document.querySelector('#');
      removeBook(e.target.parentElement.id);
    })
  })
});
