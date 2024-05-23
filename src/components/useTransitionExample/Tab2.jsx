import React, { memo } from "react";

const Tab2 = memo(function Tab2() {
  // Log once. The actual slowdown is inside Post.
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <Post />");

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<Post key={i} index={i} />);
  }
  return <ul className="itme">{items} </ul>;
});

const Post = ({ index }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Artificial delay
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <li>Post {index + 1}</li>;
};

export default Tab2;
