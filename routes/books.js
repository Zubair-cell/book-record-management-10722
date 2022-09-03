const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
const { getAllBooks, getSingleBookById, getAllIssuedBooks } = require("../controllers/book-controller");

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

router.post("/", (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).json({
            success: false,
            message: "no data provided"
        });
    }

    const book = books.find((each) => each.id === data.id);

    if (book) {
        return res.status(404).json({
            success: false,
            message: "Book alreadt exists with this id, please use unique id",
        });
    }

    const allBooks = [...books, data];

    return res.status(201).json({
        success: true,
        data: allBooks,
    });
});

/* 
*Route : /books/:id
* Method: PUT
*Description: Update book
*Access: public
* Parametere: id
* Data: author, name, genre, price, publisher, id
*/

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const book = books.find((each) => each.id === id);

    if (!book) {
        return res.status(400).json({
            success: false,
            message: "Book not found with this particular id",
        });
    }

    const updateData = books.map((each) => {
        if (each.id === id) {
            return { ...each, ...data };
        }
        return each;
    });

    return res.status(201).json({
        success: true,
        data: updateData,
    });
});

// defualt export
module.exports = router;

