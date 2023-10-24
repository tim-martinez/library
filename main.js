const myLibrary = [];
const container = document.querySelector('#container');
const testBook = new Book('Tim', 'Javascript101', '100', 'read');
const testBook2 = new Book('Rick Ross', 'Every Day Im Hustlin', '250', 'in progress');

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

//manually add first 2 default books to array
addBook(testBook);
addBook(testBook2);

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
    const th = document.createElement('th');
    th.textContent = 'Remove';
    header.appendChild(th);
   
    thead.appendChild(header);
    table.appendChild(thead);

    //create table body
    library.forEach(element => {
        const row = document.createElement('tr');
        const keys = Object.keys(element);

        keys.forEach(key => {
            const td = document.createElement('td');
            td.textContent = element[key];
            row.appendChild(td);
        });

        //add 'remove' button 
        const td = document.createElement('td');
        const btn = document.createElement('button')
        btn.id = element.title;
        btn.textContent = "remove";
        td.appendChild(btn);
        row.appendChild(td);
        tbody.appendChild(row);
        table.appendChild(tbody);
    });

    container.appendChild(table);
};

libraryTable(myLibrary);


