import React, { useEffect, useState } from "react";

const PostItems = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <div
          key={post.id}
          className="my-6 rounded-lg bg-green-50 p-4 shadow-md"
        >
          <h2 className="text-xl font-bold">{post.title} </h2>
          <p> {post.body} </p>
        </div>
      ))}
    </ul>
  );
};
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div> Loading ...</div>;
  }

  return <PostItems posts={posts} />;
};
