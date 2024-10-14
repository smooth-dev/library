// Get the button and modal elements
const showModalButton = document.getElementById("showModal");
const modal = document.getElementById("myModal");
const closeModalButton = document.getElementById("closeModal");
const confirmBtn = document.getElementById("submitText");
const userInput = document.getElementById("userInput");
const outputBox = document.getElementById("output");
const favDialog = document.getElementById("myModal");


// Show the modal when the button is clicked
showModalButton.addEventListener("click", () => {
  modal.showModal(); // opens the modal
});

// Close the modal when the close button inside the modal is clicked
closeModalButton.addEventListener("click", () => {
  modal.close(); // closes the modal
});


confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    // outputBox.textContent =`ReturnValue: ${userInput.value}`;
    addBookToLibrary(new Book(userInput.value,false));
    update();
    favDialog.close(userInput.value); // Have to send the select box value here.
  });

  let myLibrary = [];

function Book(title,status) {
this.title=title;
this.status=status;
this.toggleStatus= ()=> {
    this.status=!this.status;
}
}

function addBookToLibrary(book) {
myLibrary=myLibrary.concat(book)}

addBookToLibrary(new Book("5 ways to",false));

let update = ()=> {
    outputBox.textContent="";
  // Loop through the library and display each book with a toggle button
  myLibrary.forEach((book, index) => {
    const bookEntry = document.createElement("div");
    bookEntry.innerHTML = `${book.title} ( ${book.status ? 'Read' : 'Unread'} )`;

    // Create toggle button for each book
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Status";

    // Add an event listener to toggle the book's status when clicked
    toggleButton.addEventListener("click", () => {
      book.toggleStatus();
      update(); // Re-render the book list after toggling
    });

    // Append the button to the book entry
    bookEntry.appendChild(toggleButton);
    outputBox.appendChild(bookEntry); // Display the updated book entry
  })
}
  




  
