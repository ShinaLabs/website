import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Calendar, Eye, User, ArrowLeft, Share2, Heart, MessageCircle, Clock, Tag } from "lucide-react";
const HOSTING_URL = import.meta.env.VITE_HOSTING_URL;

const BlogDetailPage = () => {
  const { id: blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Prevent double view increment in dev (Strict Mode)

  // Only fetch blog and popular posts on mount/change
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch blog details (no view increment)
        const blogRes = await fetch(`${HOSTING_URL}/api/blog/${blogId}`);
        const blogJson = await blogRes.json();
        if (!blogJson.success) throw new Error(blogJson.message || "Blog not found");
        setBlog(blogJson.data);

        // Fetch all blogs for popular posts
        const popRes = await fetch(`${HOSTING_URL}/api/blog/allblogs`);
        const popJson = await popRes.json();
        if (!popJson.success) throw new Error(popJson.message || "Failed to fetch popular posts");
        setPopularPosts(popJson.data);
      } catch (err) {
        setError(err.message || "Failed to fetch blog details");
      } finally {
        setLoading(false);
      }
    };
    if (blogId) fetchData();
  }, [blogId]);



  //Format of the date

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };



  //share functionality
    const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

const handleGoBack = () => {
    window.history.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }


  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Blog not found"}</p>
          <button 
            onClick={handleGoBack}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }


  return(
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b mt-4 top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <button 
                onClick={handleGoBack}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>

            </div>
          </div>
        </div>
      </nav>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* Article Header */}
              <div className="p-6 pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium mr-4">
                    {blog.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(blog.createdAt)}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                </div>
                
          


                {/* Social Actions */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handleShare}
                      className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{blog.views?.toLocaleString()} views</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {blog.image ? (
                <div className="px-6 mb-6">
                  <img 
                    src={`${HOSTING_URL}/blogimages/${blog.image}`} 
                    alt={blog.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="px-6 mb-6">
                  <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-white opacity-80">💻</div>
                  </div>
                </div>
              )}

              {/* Article Content */}
              <div className="px-6 pb-8">
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* About Author */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ABOUT ME</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    JD
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Passionate developer sharing insights about modern web development, 
                      programming best practices, and tech industry trends.
                    </p>
                  </div>
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">POPULAR POSTS</h3>
                <div className="space-y-6">
                  {popularPosts.map((post) => (
                    <div
                      key={post._id}
                      className="flex space-x-4 group cursor-pointer"
                      onClick={async () => {
                        await fetch(`${HOSTING_URL}/api/blog/${post._id}/view`, { method: 'POST' });
                        navigate(`/blog/${post._id}`);
                      }}
                    >
                      <div className="w-20 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300 overflow-hidden">
                        {post.image ? (
                          <img
                            src={`${HOSTING_URL}/blogimages/${post.image}`}
                            alt={post.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-2xl">📝</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{post.category}</span>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {post.views}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(post.createdAt)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .prose h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

export default BlogDetailPage;