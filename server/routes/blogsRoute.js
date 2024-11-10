const express = require("express");
const multer = require("multer");
const Blog = require("../models/Blog"); // Assuming Blog model is in models directory
const router = express.Router();

// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// CREATE a new blog post with file upload
router.post("/", upload.fields([{ name: "featuredImage" }, { name: "authorImage" }]), async (req, res) => {
  try {
    // Construct blog data from req.body and req.files
    const blogData = {
      title: req.body.title,
      content: req.body.content,
      permalink: req.body.permalink,
      category: req.body.category,
      tags: JSON.parse(req.body.tags), // Parse tags JSON string
      status: req.body.status,
      excerpt: req.body.excerpt,
      author: {
        name: req.body.authorName,
        profileImage: req.files["authorImage"] ? req.files["authorImage"][0].buffer : null,
      },
      featuredImage: req.files["featuredImage"] ? req.files["featuredImage"][0].buffer : null,
    };

    const blog = new Blog(blogData);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE a blog post by permalink with file upload
router.put("/:permalink", upload.fields([{ name: "featuredImage" }, { name: "authorImage" }]), async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      content: req.body.content,
      permalink: req.body.permalink,
      category: req.body.category,
      tags: JSON.parse(req.body.tags),
      status: req.body.status,
      excerpt: req.body.excerpt,
      author: {
        name: req.body.authorName,
        profileImage: req.files["authorImage"] ? req.files["authorImage"][0].buffer : null,
      },
      featuredImage: req.files["featuredImage"] ? req.files["featuredImage"][0].buffer : null,
    };

    const updatedBlog = await Blog.findOneAndUpdate(
      { permalink: req.params.permalink },
      updateData,
      { new: true }
    );
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add this route to handle fetching all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blog posts

    // Convert images to base64 for each blog
    const blogsWithBase64Images = blogs.map(blog => {
      return {
        ...blog._doc, // Spread existing properties of the blog document
        featuredImage: blog.featuredImage ? blog.featuredImage.toString("base64") : null,
        author: {
          ...blog.author,
          profileImage: blog.author.profileImage ? blog.author.profileImage.toString("base64") : null,
        },
      };
    });

    res.status(200).json(blogsWithBase64Images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single blog post by permalink
router.get("/:permalink", async (req, res) => {
  try {
    const blog = await Blog.findOne({ permalink: req.params.permalink });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
