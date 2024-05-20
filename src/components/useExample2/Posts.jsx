import React from "react";
import { use, Suspense } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostsItems = () => {
  const posts = use(fetchPosts());
  return (
    <ul>
      {posts.map((post) => (
        <div
          key={post.id}
          className="my-6 rounded-lg bg-green-50 p-4 shadow-md"
        >
          <h2 className="text-xl font-bold"> {post.title} </h2>
          <p>{post.body} </p>
        </div>
      ))}
    </ul>
  );
};

const Posts = () => {
  return (
    <Suspense
      fallback={
        <h1 className="mt-5 text-center text-2xl font-bold">Loading...</h1>
      }
    >
      <PostsItems />
    </Suspense>
  );
};
export { Posts as UseExample2 };
