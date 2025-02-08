import React from "react";

function Blog({ blog }) {
  const formattedDate = new Date(blog["createdAt"]).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article className="w-full sm:w-1/3 lg:w-1/4 m-2 overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <img alt="" src={blog["img"]} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <time
          dateTime={blog["createdAt"]}
          className="block text-xs text-gray-500"
        >
          {" "}
          {formattedDate}{" "}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">{blog["title"]}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {blog["description"]}
        </p>
      </div>
    </article>
  );
}

export default Blog;
