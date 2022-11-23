let myLibrary = [];


function Book(title, author, read) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.read = read;
}

// Book.prototype.toggleReadStatus = function toggleReadStatus(event){
function toggleReadStatus(){
    console.log('clicked read/not read');
    const currentTitle = this.parentElement.parentElement.children[0].textContent;
    myLibrary.forEach(item => {
        if (item.title === currentTitle){
            item.read = !item.read;
        }
    })
    displayLibrary();
}

function addBookToLibrary(event) {
  // do stuff here
    let book = new Book(title.value, author.value, read.checked);
    //this is canceling form validation
    // const form = document.querySelector('.add-book-form');
    // const addBtn = document.querySelector('.addBtn');
    
    // form.checkValidity();
    // form.reportValidity();
    // console.log(`report validity: ${form.reportValidity()}`);
    // if (form.reportValidity() === false){
    //     event.preventDefault();
    //     addBtn.disabled = true;
    // }
    //event.preventDefault();
    
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

function clearTable(){
    //remove all rows before refreshing table
    const tr = document.querySelectorAll('.newBook');
    tr.forEach(trItem => {trItem.remove()});
}

function generateReadStatus(book){
    console.log('entered read status');
    const newReadButton = document.createElement('button');
    newReadButton.className = 'readBtn';

    // newReadButton.textContent = myLibrary[item].title;
    if (book.read === true){
        console.log('read match');
        newReadButton.innerHTML = 'Read';
    }
    else{
        newReadButton.innerHTML = 'Not Read';
    }
    return newReadButton;
}

function displayLibrary(){

    //remove all rows before refreshing table
    clearTable();

    //build table from library
    myLibrary.forEach(book => {
        const newBook = document.createElement('tr');
        newBook.className = 'newBook';
        const newTitle = document.createElement('td');
        const newAuthor = document.createElement('td');
        const newReadCell = document.createElement('td');
        const newRemove = document.createElement('td');
        //const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        newTitle.textContent = book.title;
        newAuthor.textContent = book.author;
        
        const newReadBtn = generateReadStatus(book);

        removeBtn.innerHTML = 'Remove';
        removeBtn.className = 'removeBtn';

        //add columns
        table.appendChild(newBook);
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newReadCell);
        newBook.appendChild(newRemove);

        //add buttons to table
        newReadCell.appendChild(newReadBtn);
        newRemove.appendChild(removeBtn);
    });
    generateEventListeners();
}

function removeBookFromLibrary(){
    console.log('clicked remove');
    const currentTitle = this.parentElement.parentElement.children[0].textContent;
    console.log(currentTitle);
    myLibrary.forEach(book => {
        if (book.title === currentTitle){
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
        }
    });
    displayLibrary();
}

function generateEventListeners(){
    //query selectors
    const addBtn = document.querySelector(".addBtn");
    const readBtns = document.querySelectorAll('.readBtn');
    const removeBtns = document.querySelectorAll('.removeBtn');

    //add event listeners to buttons
    addBtn.addEventListener('click',addBookToLibrary);
    readBtns.forEach(btn => {btn.addEventListener('click',toggleReadStatus)});
    removeBtns.forEach(btn => {btn.addEventListener('click',removeBookFromLibrary)});
}

//initialize library
const hpBook = new Book('Harry Potter and the Half-Blood Prince', 'J.K. Rowling', true);
const algernonBook = new Book('Flowers for Algernon', 'Daniel Keyes', true);
myLibrary.push(hpBook);
myLibrary.push(algernonBook);

generateEventListeners();


