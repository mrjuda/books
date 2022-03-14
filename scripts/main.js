// Query Selectors
const addButton = document.getElementById('add');
const newTitle = document.getElementById('newTitle');
const newAuthor = document.getElementById('newAuthor');
const bookContainer = document.getElementById('book-container');

// Objects
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

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
  bookContainer.prepend(createdBook);
}

// Event Listeners & Logic
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(new Book(newTitle.value, newAuthor.value));
});
