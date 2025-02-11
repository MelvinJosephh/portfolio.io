// models/Quote.js
const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, // Full name of the client
  email: { type: String, required: true, trim: true }, // Email address of the client
  phone: { type: String, trim: true }, // Phone number (not required)
  company: { type: String, trim: true }, // Company name
  website: { type: String, trim: true }, // Company website URL
  service: { type: String, required: true, trim: true }, // Requested service
  projectOverview: { type: String, trim: true }, // Overview of the project
  budget: { type: String, trim: true }, // Project budget
  timeline: { type: String, trim: true }, // Expected project timeline
  date: { type: Date, default: Date.now }, // Date of submission (default to now)
});

module.exports = mongoose.model("Quote", QuoteSchema);
