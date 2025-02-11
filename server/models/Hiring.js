// models/Hiring.js
const mongoose = require("mongoose");

const hiringSchema = new mongoose.Schema({
  hire: { type: String, required: false, trim: true }, // Position or job title being hired for
  companySize: { type: String, required: true, trim: true }, // Size of the company (e.g., Small, Medium, Large)
  projectType: { type: String, required: true, trim: true }, // Type of project (e.g., Software Development, Consulting)
  projectLength: { type: String, required: true, trim: true }, // Duration of the project (e.g., 6 months, 1 year)
  commitment: { type: String, required: true, trim: true }, // Commitment level (e.g., Full-time, Part-time)
  skills: { type: [String], required: true }, // List of required skills for the position
  startDate: { type: String, required: true, trim: true }, // Expected start date of the project
  contactInfo: {
    email: { type: String, required: true, trim: true }, // Email address of the contact person
    companyName: { type: String, required: true, trim: true }, // Name of the company
    contactName: { type: String, required: true, trim: true }, // Name of the contact person
    phoneNumber: { type: String, required: true, trim: true }, // Phone number of the contact person
  },
  status: { type: String, enum: ["unread", "read"], default: "unread" }, // New field
});

const HiringModel = mongoose.model("Hiring", hiringSchema);

module.exports = HiringModel;
