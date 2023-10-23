const myLibrary = [];
const container = document.querySelector('#container');
const bookList = document.createElement('div');

function Book(author,title,pages,status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
};

function addBook(book) {
    myLibrary.push(book);
};

const testBook = new Book('Tim', 'book1', '100', 'read');
const testBook2 = new Book('Rick Ross', 'Every Day Im Hustlin', '250', 'reading');

addBook(testBook);
addBook(testBook2);

bookList.classList.add('library');
// bookList.innerHTML = 'helloworld';
container.appendChild(bookList);

myLibrary.forEach((element) => {
    bookList.innerHTML += element.author + element.title;
});

// console.table(myLibrary);