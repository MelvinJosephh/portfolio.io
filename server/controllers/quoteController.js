const Quote = require("../models/Quote"); // Adjust the path if needed

// Controller to handle submitting a quote
const submitQuote = async (req, res) => {
  try {
    const { name, email, phone, company, website, service, projectOverview, budget, timeline } = req.body;

    const newQuote = new Quote({ name, email, phone, company, website, service, projectOverview, budget, timeline });
    await newQuote.save();

    res.status(201).send({ message: "Quote submitted successfully!" });
  } catch (err) {
    res.status(500).send({ message: "Error saving data", error: err.message });
  }
};

// Controller to handle fetching all quotes
const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).send({ message: "Error retrieving quotes", error: err.message });
  }
};

module.exports = { submitQuote, getQuotes };
