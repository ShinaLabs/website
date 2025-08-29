import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HOSTING_URL = import.meta.env.VITE_HOSTING_URL;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${HOSTING_URL}/api/blog/allblogs`);
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
        } else {
          setError(data.message || "Failed to fetch blogs");
        }
      } catch (err) {
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          color: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }

        /* Animated Background */
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(circle at 20% 30%, rgba(0, 255, 200, 0.15), transparent 40%),
                      radial-gradient(circle at 80% 70%, rgba(0, 150, 255, 0.15), transparent 40%);
          animation: moveBackground 8s infinite alternate;
        }

        @keyframes moveBackground {
          0% {
            background-position: 20% 30%, 80% 70%;
          }
          100% {
            background-position: 30% 40%, 70% 60%;
          }
        }

        .page-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 7rem;
          text-transform: uppercase;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .blog-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.6);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease;
          border: 2px solid rgba(255,255,255,0.1);
          cursor: pointer;
        }

        .blog-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 255, 200, 0.4);
          border: 2px solid rgba(0,255,200,0.6);
        }

        .blog-image {
          height: 200px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f72585);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #fff;
        }

        .blog-content {
          padding: 1.5rem;
        }

        .blog-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .blog-category {
          font-size: 0.9rem;
          font-weight: 600;
          color: #00f260;
          margin-bottom: 0.5rem;
          display: inline-block;
        }

        .blog-date {
          font-size: 0.85rem;
          color: #aaa;
          margin-bottom: 1rem;
          display: block;
        }

        .blog-excerpt {
          font-size: 1rem;
          color: #ddd;
          line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-title {
            font-size: 2.2rem;
          }
        }
      `}</style>

      {/* Animated Background */}
      <div className="animated-bg"></div>

      <div className="container">
        <h1 className="page-title">🚀 Our Tech Blogs</h1>
        {loading && <div style={{textAlign: 'center', color: '#fff'}}>Loading blogs...</div>}
        {error && <div style={{textAlign: 'center', color: 'red'}}>{error}</div>}
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article
              className="blog-card"
              key={blog._id}
              onClick={async (e) => {
                e.preventDefault();
                await fetch(`${HOSTING_URL}/api/blog/${blog._id}/view`, { method: 'POST' });
                navigate(`/blog/${blog._id}`);
              }}
              style={{ cursor: 'pointer' }}>
              <div className="blog-image">
                  {blog.image ? (
                    <img src={`${HOSTING_URL}/blogimages/${blog.image}`} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span role="img" aria-label="blog">📝</span>
                  )}
</div>
              <div className="blog-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="blog-category">{blog.category || 'General'}</span>
                  <span className="blog-excerpt">Views: {blog.views ?? 0}</span>
                </div>
                <h2 className="blog-title" style={{marginBottom: '0.5rem'}}>{blog.title}</h2>
                <span className="blog-date">Updated at: {new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
