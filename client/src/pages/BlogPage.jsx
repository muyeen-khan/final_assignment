import React, { useEffect, useState } from "react";
import { GetBlogs } from "../apiService";
import Blog from "../components/Blog";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

function BlogPage() {
  let [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await GetBlogs();

        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <Layout>
      {blogs.length === 0 ? (
        <Loader />
      ) : (
        <div className="w-full justify-center flex flex-wrap">
          {blogs.map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default BlogPage;
