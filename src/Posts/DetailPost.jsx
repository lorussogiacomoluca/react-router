import React from "react";
import { useParams } from "react-router-dom";

const DetailPost = () => {
  //Save id params in id variable
  const { id } = useParams();
  return (
    <div>
      <h1>Post Detail</h1>
      <h5>{id}</h5>
    </div>
  );
};

export default DetailPost;
