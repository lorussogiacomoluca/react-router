import React from "react";
import assets from "../assets";

const Comments = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col d-flex align-items-center gap-3">
          <h2>Comments</h2>
          <span className="badge badge-soft-warning">12</span>
        </div>
      </div>

      <div className="row mb-4 d-flex align-items-center">
        <div className="col-auto">
          <img className="profile-img" src={assets.boy} alt="Profile" />
        </div>
        <div className="col">
          <h4 className="mb-0">Jeanbu Rasc</h4>
          <p className="text-muted mb-2">@jeanbu</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            aspernatur cumque dicta officiis in porro sequi odio et rerum earum.
          </p>
          <div className="d-flex gap-4">
            <div>
              <i className="fa-solid fa-thumbs-up text-warning"></i> 25
            </div>
            <div>
              <i className="fa-solid fa-comment"></i> Reply
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
