import React from "react";

const PostPerPage = ({ setPostperPage }) => {
  return (
    <>
      <div className="col-3">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => setPostperPage(e.target.value)}
        >
          <option value="0">All</option>
          <option value="6">6</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
      </div>
    </>
  );
};

export default PostPerPage;
