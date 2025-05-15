import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <h5 key={post.id}>{post.title}</h5>
      ))}
    </div>
  );
};

export default Posts;
