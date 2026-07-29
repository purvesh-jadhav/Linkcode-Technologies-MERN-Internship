const express = require("express");

const router = express.Router();

const {
    handleAddBookController,handelgetAllBooksController,
    handleDeleteBookController
} = require("../controller/bookController");

router.get("/getmsg", (req, res) => {
    res.send("Response from Book Router");
});

router.post("/addBook", handleAddBookController);
router.get("/getbook", handelgetAllBooksController);
router.delete("/deletebook", handleDeleteBookController);

module.exports = router;