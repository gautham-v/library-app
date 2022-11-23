let myLibrary = [];


function Book(title, author, read) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.read = read;
}

// Book.prototype.toggleReadStatus = function toggleReadStatus(event){
function toggleReadStatus(event){
    console.log('hello');
    const currentTitle = this.parentElement.parentElement.children[0].textContent;
    console.log(currentTitle);
    if (this.textContent === "Read"){
        this.textContent = 'Not Read';
        console.log(book.name);
    }
    else {
        this.textContent = 'Read';
    }
}

function addBookToLibrary(event) {
  // do stuff here
    let book = new Book(title.value, author.value, read.checked);
    //this is canceling form validation
    event.preventDefault();
    if (!(myLibrary.includes(book))){ 
        myLibrary.push(book);
    }
    console.log(myLibrary);
    displayLibrary();

    //clear form
    title.value = '';
    author.value = '';
    read.checked = false;
}

function displayLibrary(){

    //remove all rows before refreshing table
    const tr = document.querySelectorAll('.newBook');
    var trArr = Array.from(tr);
    trArr.forEach(trItem => {trItem.remove()});

    for (let item in myLibrary){
        const newBook = document.createElement('tr');
        newBook.className = 'newBook';
        const newTitle = document.createElement('td');
        const newAuthor = document.createElement('td');
        const newReadCell = document.createElement('td');
        const newRemove = document.createElement('td');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        newTitle.textContent = myLibrary[item].title;
        newAuthor.textContent = myLibrary[item].author;
        if (myLibrary[item].read === true){
            readBtn.innerHTML = 'Read';
            readBtn.className = 'readBtn';
        }
        else{
            readBtn.innerHTML = 'Not Read';
            readBtn.className = 'notReadBtn';
        }
        removeBtn.innerHTML = 'Remove';
        removeBtn.className = 'removeBtn';

        //add columns
        table.appendChild(newBook);
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newReadCell);
        newBook.appendChild(newRemove);

        //add buttons
        newReadCell.appendChild(readBtn);
        newRemove.appendChild(removeBtn);
    }
}

//query selectors
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const read = document.querySelector('#read');
const addBtn = document.querySelector(".addBtn");
const table = document.querySelector('#table');
const readBtns = document.querySelectorAll('.readBtn');
const notReadBtns = document.querySelectorAll('.notReadBtn');
const removeBtns = document.querySelectorAll('.removeBtn');

const readBtn = document.querySelector('.readBtn');
readBtn.addEventListener('click', toggleReadStatus);

//event listeners
addBtn.addEventListener('click',addBookToLibrary);

//read button event listeners
var readBtnsArr = Array.from(readBtns);
readBtns.forEach(btn => {btn.addEventListener('click',toggleReadStatus)});

var notReadBtnsArr = Array.from(notReadBtns);
notReadBtns.forEach(btn => {btn.addEventListener('click',toggleReadStatus)});

const hpBook = new Book('Harry Potter and the Half-Blood Prince', 'J.K. Rowling', true);
const algernonBook = new Book('Flowers for Algernon', 'Daniel Keyes', true);
myLibrary.push(hpBook);
myLibrary.push(algernonBook);
displayLibrary();

