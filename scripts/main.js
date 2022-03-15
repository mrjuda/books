// Query Selectors
const addButton = document.getElementById('add');
const newTitle = document.getElementById('newTitle');
const newAuthor = document.getElementById('newAuthor');
const bookContainer = document.getElementById('book-container');

const strBookShelf = [];
const bookShelf = [];


// Objects
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

if (!localStorage.strBookShelf){
  alert('empty');
}

function loadBooks() {
  const rebuiltBookShelf = localStorage.getItem('strBookShelf');
  alert(JSON.parse(rebuiltBookShelf));
  for(i = 0; i < rebuiltBookShelf.length; i++){
    let currentBook = JSON.parse(rebuiltBookShelf[i]);
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
  for(i = 0; i < strBookShelf.length; i++){
    let currentBook = JSON.parse(strBookShelf[i]);
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

=======
// const bookShelf = [new Book('Aaron is Great', 'Aaron Keegan')];

function addBook(book) {
  const createdBook = document.createElement('div');
  createdBook.classList.add('book');
  const newBook = `
      <span class="title">${book.title}</span>
      <br>
      <span class="author">${book.author}</span>
      <br>
      <button class="remove" type="button">remove</button>
      <hr>`;
  createdBook.innerHTML += newBook;
  bookContainer.appendChild(createdBook);
}

addBook(new Book('blah', 'blah'));

// Event Listeners & Logic
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(new Book(newTitle.value, newAuthor.value));
});
