let myLibrary = [];


function Book(title) {
  // the constructor...
    this.title = title;
}

function addBookToLibrary() {
  // do stuff here
    
    let book = new Book(input.value);
    if (!(myLibrary.includes(book))){ 
        myLibrary.push(book);
    }
    console.log(myLibrary);
    displayLibrary();
}

function displayLibrary(){
    console.log('hello');
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    for (let item in myLibrary){
        console.log(myLibrary[item].title);
        newCell.textContent = myLibrary[item].title;
        table.appendChild(newRow);
        table.appendChild(newCell);
    }
}

const input = document.querySelector('#book');
const addBtn = document.querySelector(".addBtn");
const table = document.querySelector('#table');
addBtn.addEventListener('click',addBookToLibrary);