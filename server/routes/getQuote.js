// routes/quote.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
const { submitQuote, getQuotes } = require("../controllers/quoteController");

// Configure CORS for this router
const corsOptions = {
    origin: ["https://aberrange-server.netlify.app", "http://localhost:3000", "http://localhost:3001"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
};
router.use(cors(corsOptions));

// Define routes
router.post("/quote", submitQuote); // Route for submitting a quote
router.get("/quotes", getQuotes);  // Route for retrieving all quotes

module.exports = router;
