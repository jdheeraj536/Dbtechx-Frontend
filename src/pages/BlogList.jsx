import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";

function BlogList() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 px-6 lg:px-16 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Our Insights & Blogs</h1>
          <p className="text-zinc-400 text-center max-w-xl mx-auto mb-16">
            Explore expert tips, digital marketing strategies, and technology guides to scale your business online.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <div key={blog.slug} className="bg-[#0b0c10] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-red-500/50 transition-all duration-300">
                <div>
                  <span className="text-xs font-semibold text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <h2 className="text-xl font-bold mt-4 mb-3 text-white leading-snug">
                    {blog.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">{blog.date}</span>
                  <Link to={`/blogs/${blog.slug}`} className="text-red-500 font-semibold text-sm hover:underline flex items-center gap-1">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default BlogList;