import { useState } from "react";

// PostItem component
const PostItem = ({ post }) => {
  return (
    <div className="my-6 rounded-lg bg-green-50 p-4 shadow-md">
      <h2 className="text-xl font-bold">{post.title} </h2>
      <p> {post.body} </p>
    </div>
  );
};
// PostForm component
const PostForm = ({ addPost }) => {
  const formAction = async (formData) => {
    // we have direct access to the form data
    const newPost = {
      title: formData.get("title"),
      body: formData.get("body"),
    };
    addPost(newPost);
  };
  return (
    <form
      action={formAction}
      className="mb-4 rounded  bg-white px-8 pb-8 pt-6 shadow-md"
    >
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="title"
          type="text"
          placeholder="Enter title"
          name="title"
        />
      </div>
      <div className="mb-6">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="body"
        >
          Body
        </label>
        <textarea
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="body"
          rows="5"
          placeholder="Enter body"
          name="body"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

// Posts component
const Posts = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <>
      <PostForm addPost={addPost} />
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </>
  );
};

export { Posts as ActionExample1 };
