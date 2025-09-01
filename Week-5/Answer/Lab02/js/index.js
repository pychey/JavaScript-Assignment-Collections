import BOOKS from "../assets/data.js";

// YOUR CODE BELOW

const bookContainer = document.getElementById('book-container');

for ( const book of BOOKS ) {
    const bookCard = document.createElement('div')
    bookCard.className = 'book-card'

    const bookImg = document.createElement('img')
    bookImg.src = book.image_src
    bookImg.alt = book.title
    bookImg.className = 'book-image'

    const bookInfo = document.createElement('div')
    bookInfo.className = 'book-info'

    const bookTitle = document.createElement('h2')
    bookTitle.textContent = book.title
    
    const bookAuthor = document.createElement('p')
    bookAuthor.textContent = `by ${book.author}`

    const bookYear = document.createElement('p')
    bookYear.textContent = book.year

    bookInfo.appendChild(bookTitle)
    bookInfo.appendChild(bookAuthor)
    bookInfo.appendChild(bookYear)

    bookCard.appendChild(bookImg)
    bookCard.appendChild(bookInfo)

    bookContainer.appendChild(bookCard)
}