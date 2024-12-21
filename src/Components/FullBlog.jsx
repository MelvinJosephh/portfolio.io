import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 
import '../Styles/components/FullBlog.scss'

const FullBlog = () => {
  const { permalink } = useParams(); // Get permalink from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const cachedBlog = localStorage.getItem(`blog-${permalink}`);
  
      if (cachedBlog) {
        setBlog(JSON.parse(cachedBlog));
        setLoading(false);
      } else {
        const response = await axios.get(`http://localhost:5000/api/blogs/${permalink}`);
        setBlog(response.data);
        localStorage.setItem(`blog-${permalink}`, JSON.stringify(response.data)); 
      }
    } catch (err) {
      setError("Failed to fetch the full blog.");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchBlog();
  }, [permalink]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="full-blog">
      <div className="container topMargin">
        {blog ? (
          <div>
            <h1>{blog.title}</h1>
            <p>{new Date(blog.publishDate).toLocaleDateString()}</p>
            <p>By: {blog.author.name}</p>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} /> {/* Assuming content is HTML */}
          </div>
        ) : (
          <p>Blog not found.</p>
        )}
      </div>
    </section>
  );
};

export default FullBlog;
