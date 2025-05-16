import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ posts }) => {
  return (
    <>
      <div className="d-flex">
        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-shadow">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      className="card-link text-warning text-decoration-none"
                      href="#"
                    >
                      {post.title}
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary d-flex gap-3">
                    {post.tags.map((tag) => (
                      <NavLink
                        to={`/posts/tag/${tag}`}
                        key={tag}
                        className="text-warning-emphasis text-decoration-none"
                      >
                        <span>{tag}</span>
                      </NavLink>
                    ))}
                  </h6>
                  <p className="card-text">
                    {post.body.length > 100
                      ? post.body.substring(0, 80) + "..."
                      : post.body}
                  </p>
                  <div className="">
                    <NavLink to={`/posts/${post.id}`}>
                      <button className="btn btn-warning w-100">
                        Leggi l'articolo
                      </button>
                    </NavLink>
                  </div>
                  <div className="card-footer d-flex justify-content-between mt-3">
                    <button type="button" className="btn btn-outline-success">
                      <i className="fa-solid fa-thumbs-up me-2"></i>
                      <span className="badge text-bg-success">
                        {post.reactions.likes}
                      </span>
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      <i className="fa-solid fa-thumbs-down me-2"></i>
                      <span className="badge text-bg-danger">
                        {post.reactions.likes}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
