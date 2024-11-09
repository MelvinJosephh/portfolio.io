import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');// Adjust this path if needed
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to fetch blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="blog services">
      <div className="container topMargin">
        <div className="heading">
          <h3>LATEST BLOG</h3>
          <h1>Read Inspirational Stories Every Week</h1>
        </div>
        <div className="contain grid topMargin">
          {blogs.map((blog) => (
            <div className="box" key={blog._id}>
              <div className="img">
                <img src={blog.featuredImage} alt={blog.title} />
              </div>
              <div className="text">
                <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <p>By: {blog.author.name}</p>
                <a href={`/${blog.permalink}`}>Read More
                  <KeyboardDoubleArrowRightIcon className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
