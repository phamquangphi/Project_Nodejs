const express = require("express");
const router = express.Router();
const Book = require("../models/book.model");

// Read books
router.get("/", async function (req, res, next) {
  let books = await Book.find();
  res.render("index", { books: books });
});

// Create books
router.post("/", function (req, res, next) {
  let newbook = new Book();
  newbook.title = req.body.title;
  newbook.description = req.body.description;
  newbook.author = req.body.author;
  newbook
    .save()
    .then(function () {
      res.redirect("/");
    })
    .catch(function (err) {
      if (err) {
        console.log(err);
      }
    });
});

// Update books
router.post("/update", function (req, res, next) {
  let id = req.body.id;
  Book.findById(id, function (err, book) {
    if (err) {
      console.log(err);
    }
    book.title = req.body.title;
    book.description = req.body.description;
    book.author = req.body.author;
    book.save();
  });
  res.redirect("/");
});

// Delete books
router.post("/delete", function (req, res, next) {
  let id = req.body.id;
  Book.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/");
});
module.exports = router;
