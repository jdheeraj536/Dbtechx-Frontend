import { useParams, Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";

function BlogPost() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col justify-between">
        <Navbar />
        <div className="pt-32 text-center flex-grow flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-zinc-400 mb-6">The article you are looking for does not exist.</p>
          <Link to="/blogs" className="bg-red-600 px-6 py-3 rounded-xl font-semibold text-white">
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 lg:px-16 flex-grow">
        <article className="max-w-4xl mx-auto">
          {/* Blog Meta Header */}
          <div className="mb-8">
            <Link to="/blogs" className="text-red-500 text-sm font-semibold hover:underline mb-4 inline-block">
              ← Back to All Insights
            </Link>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs font-semibold text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-xs text-zinc-400">{blog.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight text-white">
              {blog.title}
            </h1>
          </div>

          {/* Blog Rich HTML Content */}
          <div 
            className="prose prose-invert max-w-none text-zinc-300 text-base md:text-lg leading-relaxed space-y-6 bg-[#0b0c10] border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Call to Action Box */}
          <div className="mt-12 bg-gradient-to-r from-red-950/40 to-black border border-red-500/30 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Scale Your Business in Bihar?</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-xl mx-auto">
              Partner with DBTECHX for cutting-edge website development, custom software, and top-tier SEO services across Purnia, Araria, Katihar, and Kishanganj.
            </p>
            <a 
              href="https://wa.me/919504393419" 
              className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3.5 rounded-xl font-bold text-white text-sm shadow-lg shadow-red-600/30 transition-all"
            >
              Get Free Consultation on WhatsApp
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default BlogPost;