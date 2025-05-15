import axios from "axios";
import React, { useEffect } from "react";

const Posts = () => {
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
