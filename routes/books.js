const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById, getSingleBookByName } = require("../controllers/book-controller");

const router = express.Router();

/* 
*Route : /books
* Method: GET
*Description: Get all books
*Access: public
* Parametere: None
*/

router.get("/", getAllBooks);

/* 
*Route : /books/:id
* Method: GET
*Description: Get book by id
*Access: public
* Parametere: id
*/

router.get("/:id", getSingleBookById);

router.get("/getbook/name/:name", getSingleBookByName);

/* 
*Route : /books/issued
* Method: GET
*Description: Get all ussued books
*Access: public
* Parametere: none
*/

router.get("/issued/by-user", getAllIssuedBooks);

/* 
*Route : /books
* Method: POST
*Description: Create new book
*Access: public
* Parametere: none
* Data: author, name, genre, price, publisher, id
*/

router.post("/", addNewBook);

/* 
*Route : /books/:id
* Method: PUT
*Description: Update book
*Access: public
* Parametere: id
* Data: author, name, genre, price, publisher, id
*/

router.put("/:id", updateBookById);

// defualt export
module.exports = router;

