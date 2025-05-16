import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Comments from "./Comments";

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

  const navigate = useNavigate();

  useEffect(() => getSinglePost(), [id]);

  return (
    <div>
      <div className="row">
        <h1 className="text-warning">{post.title}</h1>
      </div>
      <div className="row">
        <h6 className="card-subtitle mb-2 text-body-secondary d-flex gap-3">
          {post.tags?.map((tag) => (
            <NavLink
              to={`/posts/tag/${tag}`}
              key={tag}
              className="text-warning-emphasis text-decoration-none"
            >
              <span>{tag}</span>
            </NavLink>
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
              {post.reactions?.likes}
            </span>
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i className="fa-solid fa-thumbs-down me-2"></i>
            <span className="badge text-bg-danger">
              {post.reactions?.likes}
            </span>
          </button>
        </div>
      </div>
      <div className="row  mt-4">
        <div className="col-12 d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li
                className={
                  post.id === 1
                    ? "page-item disabled"
                    : "page-item cursor-pointer"
                }
                onClick={() => navigate(`/posts/${parseInt(post.id) - 1}`)}
              >
                <p
                  className={
                    post.id === 1
                      ? "page-link"
                      : "text-warning page-link cursor-pointer"
                  }
                >
                  Previous Post
                </p>
              </li>

              <li
                className="page-item"
                onClick={() => navigate(`/posts/${parseInt(post.id) + 1}`)}
              >
                <p className="page-link text-warning cursor-pointer">
                  Next Post
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Comments postId={id} />
    </div>
  );
};

export default DetailPost;
