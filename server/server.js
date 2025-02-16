// server.js
const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact");
const blogRoutes = require("./routes/blogsRoute");
const authRoutes = require ("./routes/login");
const quoteRoutes = require("./routes/getQuote"); 
const hiringRoutes = require("./routes/hiringForm"); 
require("dotenv").config();
const bodyParser = require('body-parser');

const app = express();
const cors = require("cors");

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Configure CORS
const corsOptions = {
    origin: ["https://aberrange-server.netlify.app","http://localhost:5000", "http://localhost:3000", "http://localhost:3001"],
    methods: "GET,POST,PUT,DELETE", 
    allowedHeaders: "Content-Type,Authorization", 
  };

app.use(cors(corsOptions));

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", contactRoutes);      
app.use("/api/blogs", blogRoutes);    
app.use("/api/auth", authRoutes); 
app.use("/api", quoteRoutes);
app.use("/api", hiringRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
