import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const TagPosts = () => {
  const { tag } = useParams();
  const [posts, setPosts] = useState([]);

  const getData = () => {
    axios
      .get(`https://dummyjson.com/posts/tag/${tag}`)
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, [tag]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>
          Post con tag: <span className="text-warning">{tag}</span>
        </h1>
      </div>
      <Card posts={posts} />
    </div>
  );
};

export default TagPosts;
