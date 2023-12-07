"use strict";

(() => {
    fetch('http://localhost:3000/books')
        .then(resp => resp.json())
        .then(book => {
            // A second fetch request to get the author data
            fetch(`http://localhost:3000/authors`)
                .then(resp => resp.json())
                .then(author => {
                    // Log the book and author data to the console
                    console.log(book);
                    console.log(author);
                    // OR we could simply add the author into the book object
                    book.author = author;
                    console.log(book);
                })
                .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
    const createBook = async (book) => {
        try {
            const url = 'http://localhost:3000/books';
            const options = {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(book)
            };
            const resp = await fetch(url,options);
            const newBook = await resp.json();
            return newBook;
        } catch (error) {
            console.log(error);
        }
    }
    const createAuthor = async (author) => {
        try {
            const url = 'http://localhost:3000/authors';
            const options = {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(author)
            };
            const resp = await fetch(url,options);
            const newAuthor = await resp.json();
            return newAuthor;
        } catch (error) {
            console.log(error);
        }
    }

    const newBook = {
        "title": "Garfield at Large",
        "authorId": 4,
        "publishedYear": 1980,
        "genre": "Daily Comics",
        "summary": "The epic tale of a fat cat and his cartoon-ish owner: John.",
        "ISBN": "9780345320131"
    }

    const newAuthor ={
        "name": "Jim Davis",
        "birthYear": 1945,
        "deathYear": null,
        "nationality": "American"
    }

    const editBook = async (id, book) => {
        try {
            const url = `http://localhost:3000/books/${id}`;
            const options = {
                method: "PATCH",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(book)
            };
            const resp = await fetch(url,options);
            const newBook = await resp.json();
            return newBook;
        } catch (error) {
            console.log(error);
        }
    }

    editBook(5,{authorId: 5})

    function populateDropDown() {
        fetch("http://localhost:3000/books").then(resp => resp.json()).then(data => {
            console.log(data);
            for (let book of data) {
                const option = document.createElement("option");
                option.value = book.id;
                option.innerText = book.title;
                dropDown.appendChild(option);
            }
        })
    }
    populateDropDown();
    document.querySelector("#edit-select").addEventListener("change", (e) =>
    const bookId = e.target.value;
    fetch("http://localhost:3000/books/" + bookId).then(resp => resp.json()) then(book =>)
    )
// Create a new book and then fetch the updated list of books
//     createBook(newBook)
//         .then(() => fetch("http://localhost:3000/books"))
//         .then(response => response.json())
//         .then(data => console.log(data))
//      createAuthor(newAuthor)
//         .then(() => fetch("http://localhost:3000/authors"))
//         .then(response => response.json())
//         .then(data => console.log(data))
})();