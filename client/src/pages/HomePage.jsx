import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetBlogs } from "../apiService";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

function HomePage() {
  let [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await GetBlogs();
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <Layout>
        <Hero />
        {/* ----------------blog section----------------- */}
        <div className="px-4 pt-16 text-center mx-auto max-w-screen-xl">
          <h2 className="text-2xl py-4 font-bold">Latest Blogs</h2>
          <div className="justify-center flex flex-wrap">
            {blogs.slice(0, 6).map((blog, index) => (
              <Blog blog={blog} key={index} />
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {<Link to="/blog-page">See more blogs</Link>}
          </button>
        </div>
      </Layout>
    </div>
  );
}

export default HomePage;
