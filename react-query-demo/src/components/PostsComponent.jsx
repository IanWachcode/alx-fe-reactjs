import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function PostsComponent() {
  // useQuery parameters: queryKey (must be array in v5), queryFn
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"], // unique key for caching (must be array in v5)
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    }
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Oops! Something went wrong.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>

      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Refetch Posts
      </button>

      <ul className="space-y-4">
        {data.map((post) => (
          <li
            key={post.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;