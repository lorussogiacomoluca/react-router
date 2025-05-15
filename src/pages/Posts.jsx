import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Posts = () => {
  const endpoint = "https://dummyjson.com/posts";
  const [posts, setPosts] = useState([]);
  const getData = () => {
    axios
      .get(endpoint)
      .then((response) => {
        console.log(response.data.posts);
        setPosts(response.data.posts);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      <Card posts={posts} />
    </div>
  );
};

export default Posts;
