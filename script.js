let myLibrary = [];
let title;
let author;
let pages;
let read;
let i=0;


const button=document.getElementById('submit');
const output=document.querySelector('.output');

button.addEventListener('click',()=>{
    //Gets the values enter by the user 
    event.preventDefault();
    title=document.getElementById('title').value;
    author=document.getElementById('author').value;
    pages=document.getElementById('pages').value;
    read=document.querySelector('input[name="read"]:checked').value;
    //Adds user input to the myLibrary array
    addBookToLibrary();
    //Prints the input out
    print();
    //Clears what the user previously inputed 
    document.getElementById("form").reset();
    
});


function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary() {
    //Create a new book object and adding it to the array
    let book=new Book(title,author,pages,read);
    myLibrary.push(book);

}

function print(){
    //Creates a new post every time user clicks submit 
    const posts=document.createElement('div')
    posts.classList.add("posts")
    //Adds a list of the book title, author, pages, and whether the user has read it or not
    const titleOutput=document.createElement('li');
    const authorOutput=document.createElement('li');
    const pageOutput=document.createElement('li');
    const readOutput=document.createElement('li');

    //Create button to change the read status 
    const changeStatus=document.createElement('button');
    changeStatus.textContent="Change Status"
    changeStatus.classList.add("change");
    //Event listener to change the read status 
    changeStatus.addEventListener('click',()=>{
        if(readOutput.innerHTML=='Status: Read'){
            readOutput.innerHTML='Status: Not Read'; 
        } 
        else if(readOutput.innerHTML=='Status: Not Read'){
            readOutput.innerHTML='Status: Read';
        }
    });
    //Create Delete button and adding a class for customization in stylesheet
    const removePost=document.createElement('button');
    removePost.textContent="Delete";
    removePost.classList.add("delete");
    removePost.addEventListener('click',()=>{
        posts.remove();
    });

    // Gets the values from the myLibrary array
    //titleOutput.innerHTML=`Book title: ${myLibrary[i].title}`;
    authorOutput.innerHTML=`Author: ${myLibrary[i].author}`;
    pageOutput.innerHTML=`Pages: ${myLibrary[i].pages}`;
    readOutput.innerHTML=`Status: ${myLibrary[i].read}`;

    //Shows the post on the screen
    output.appendChild(posts);
    posts.appendChild(titleOutput);
    posts.appendChild(authorOutput);
    posts.appendChild(pageOutput);
    posts.appendChild(readOutput);
    posts.appendChild(changeStatus);
    posts.appendChild(removePost);
    //Clears array 
    console.log(myLibrary)
    i++;

}





