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
      <div className="row">
        <h1 className="text-warning">{post.title}</h1>
      </div>
      <div className="row">
        <h6 className="card-subtitle mb-2 text-body-secondary d-flex gap-3">
          {post.tags?.map((tag) => (
            <p className="text-warning-emphasis" key={tag}>
              {tag}
            </p>
          ))}
        </h6>
      </div>
      <div className="row d-flex my-4">
        <div className="col-12">
          <i className="fa-solid fa-eye"></i>{" "}
          <span>Letto da {post.views} utenti</span>
        </div>
      </div>
      <div className="row">
        <div className="display-5">{post.body}</div>
      </div>
      <div className="row">
        <div className="card-footer d-flex gap-4 mt-3">
          <button type="button" className="btn btn-outline-success">
            <i className="fa-solid fa-thumbs-up me-2"></i>
            <span className="badge text-bg-success">
              {post.reactions.likes}
            </span>
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i className="fa-solid fa-thumbs-down me-2"></i>
            <span className="badge text-bg-danger">{post.reactions.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
