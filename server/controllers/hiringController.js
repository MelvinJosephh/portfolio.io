// controllers/hiringController.js
const HiringModel = require("../models/Hiring");

// Save hiring data
const saveHiringData = async (req, res) => {
  try {
    const hiringData = req.body;
    const newHiringRecord = new HiringModel(hiringData);
    await newHiringRecord.save();
    res.status(200).send({ message: "Hiring data successfully saved!" });
  } catch (error) {
    console.error("Error saving hiring data:", error);
    res.status(500).send({ error: "Failed to save hiring data" });
  }
};

// Fetch all hiring data
const getHiringData = async (req, res) => {
  try {
    const hiringData = await HiringModel.find();
    res.status(200).json(hiringData);
  } catch (error) {
    console.error("Error fetching hiring data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Mark a record as read
const markHiringAsRead = async (req, res) => {
  try {
    const { id } = req.params; // Assuming ID is passed as a URL parameter
    const updatedRecord = await HiringModel.findByIdAndUpdate(
      id,
      { status: "read" },
      { new: true }
    );

    if (!updatedRecord) {
      return res.status(404).send({ error: "Record not found" });
    }

    res.status(200).send({ message: "Record marked as read", data: updatedRecord });
  } catch (error) {
    console.error("Error marking record as read:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { saveHiringData, getHiringData, markHiringAsRead };
