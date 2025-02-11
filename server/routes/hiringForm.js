const express = require("express");
const router = express.Router();
const cors = require("cors");
const { saveHiringData, getHiringData, markHiringAsRead } = require("../controllers/hiringController");

const corsOptions = {
  origin: ["https://aberrange-server.netlify.app", "http://localhost:5000", "http://localhost:3000", "http://localhost:3001"],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
router.use(cors(corsOptions));

router.post("/submit-hiring-form", saveHiringData);
router.get("/fetch-hiring-form", getHiringData);
router.put("/mark-hiring-as-read/:id", markHiringAsRead); // New route

module.exports = router;
