import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPost = () => {
  //Save id params in id variable
  const { id } = useParams();
  //Endpoint with ID
  const endpoint = `https://dummyjson.com/posts/${id}`;
  //Creazione variaible di stato
  const [post, setPost] = useState({});
  //Create getSinglePost function by AJAX call
  const getSinglePost = () => {
    axios
      .get(endpoint)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => getSinglePost(), []);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default DetailPost;
