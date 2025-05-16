import React, { useEffect, useState } from "react";
import assets from "../assets";
import axios from "axios";

const Comments = ({ postId }) => {
  const endpoint = `https://dummyjson.com/posts/${postId}/comments`;
  const [comments, setComments] = useState({ comments: [], total: 0 });
  const getAllComment = () => {
    axios.get(endpoint).then((response) => setComments(response.data));
  };

  useEffect(() => {
    getAllComment();
  }, [postId]);
  return (
    <>
      <div className="row mb-5">
        <div className="col d-flex align-items-center gap-3">
          <h2>Comments</h2>
          <span className="badge badge-soft-warning">{comments.total}</span>
        </div>
      </div>

      {comments.comments.map((comment) => (
        <div className="row mb-4 d-flex align-items-center" key={comment.id}>
          <div className="col-auto">
            <img className="profile-img" src={assets.boy} alt="Profile" />
          </div>
          <div className="col">
            <h4 className="mb-0">{comment.user.fullName}</h4>
            <p className="text-muted mb-2">@{comment.user.username}</p>
            <p>{comment.body}</p>
            <div className="d-flex gap-4">
              <div>
                <i className="fa-solid fa-thumbs-up text-warning"></i>{" "}
                {comment.likes}
              </div>
              <div>
                <i className="fa-solid fa-comment"></i> Reply
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
