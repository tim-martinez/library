const myLibrary = [];
const container = document.querySelector('#container');

//object constructor 
function Book(author,title,pages,status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
};

//add object to myLibrary array 
function addBook(book) {
    myLibrary.push(book);
};

//create table for books here 
function libraryTable(library){

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    //create table header
    const header = document.createElement('tr');
    for (const key in library[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        header.appendChild(th);
    };

    //add 'Remove' to header
    if (library.length > 0){ 
        const th = document.createElement('th');
        th.textContent = 'Remove';
        header.appendChild(th);
    
        thead.appendChild(header);
        table.appendChild(thead);
    };

    //if library is empty display message
    if (library.length == 0){
        const empty = document.createElement('h3');
        empty.textContent = 'Add a book to get started'
        container.appendChild(empty);
    }
    //create table body
    library.forEach(function (element,index) {
        const row = document.createElement('tr');
        const keys = Object.keys(element);
        keys.forEach(key => {
            const td = document.createElement('td');
            td.textContent = element[key];
            row.appendChild(td);
        });
        //add 'remove' button to table
        const td = document.createElement('td');
        const btn = document.createElement('button');
        btn.className = 'remove';
        btn.id = index;
        btn.textContent = 'remove';
        td.appendChild(btn);
        row.appendChild(td);
        tbody.appendChild(row);
        table.appendChild(tbody);
    });
    container.appendChild(table);
};

libraryTable(myLibrary);
//remove book from myLibrary
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const button = event.target;
        const index = button.id;
        myLibrary.splice(index, 1);
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        };
        libraryTable(myLibrary);
    };
});

//add book open the model
const addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', () => {
        const modal = document.querySelector('#modal');
        modal.showModal();
    });

//add event listener for the saveBtn
const saveBtn = document.querySelector('#saveBtn');

saveBtn.addEventListener('click', (event) => {
    //prevent submit form to server
    event.preventDefault();

    //retrieve the values from the form submissions

    const form = document.querySelector('form');
    const modal = document.querySelector('#modal');
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const inProgress = document.querySelector('#inProgress');
    const finished = document.querySelector('#finished');
    const status = inProgress.checked ? 'In progress' : finished.checked ? 'Finished' : 'not specified';

    const newBook = new Book(author, title, pages, status);
    console.table(newBook);
    addBook(newBook);

    // Clear container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //generate table, reset form, and close dialog
    libraryTable(myLibrary);
    form.reset();
    modal.close();
});