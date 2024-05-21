import { useState, useOptimistic } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CreatePost = ({ createPost, posts }) => {
  const addPost = async (formData) => {
    const newPost = {
      title: formData.get("title") || "",
      body: formData.get("body") || "",
    };

    // Adding optimistic add post
    addOptimisticPost({ title: newPost.title, body: newPost.body });

    // Add post (time taking server call)
    await createPost(newPost);
  };

  const [optimisticPosts, addOptimisticPost] = useOptimistic(
    posts,
    (state, newPost) => [
      ...state,
      {
        title: newPost.title,
        body: newPost.body,
        success: true,
      },
    ]
  );

  return (
    <>
      <form action={addPost} className="mb-5 flex items-center">
        <input
          type="text"
          name="title"
          placeholder="Title!"
          className="mr-2 rounded border border-gray-300 px-2 py-1 focus:border-green-500 focus:outline-none"
        />

        <input
          type="text"
          name="body"
          placeholder="Body!"
          className="mr-2 rounded border border-gray-300 px-2 py-1 focus:border-green-500 focus:outline-none"
        />

        <button
          type="submit"
          className="focus:shadow-outline rounded bg-green-500 px-4 py-1 font-semibold text-white hover:bg-green-600 focus:outline-none"
        >
          Send
        </button>
      </form>

      <RenderPosts posts={optimisticPosts} />
    </>
  );
};

const RenderPosts = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post.title} className="flex items-center">
            <span className="mr-2 px-2 py-1">{post.title}</span>
            <span className="mr-2 px-2 py-1">{post.body}</span>
            <div className="ml-1 text-gray-500">
              Status: {post.success ? "Posting..." : "Successfully Posted!"}
            </div>
          </div>
        ))}
    </>
  );
};

const UseOptimisticExample = () => {
  const [posts, setPosts] = useState([]);

  const addPost = async (post) => {
    await delay(1000);
    setPosts((prev) => [...prev, post]);
  };

  return (
    <>
      <span className="mb-4 flex items-center px-4 py-4">
        useOptimistic Example
      </span>
      <CreatePost createPost={addPost} posts={posts} />
    </>
  );
};

export default UseOptimisticExample;
