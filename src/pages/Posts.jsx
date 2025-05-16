import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import PostPerPage from "../components/PostPerPage";

const Posts = () => {
  const [pagination, setPagination] = useState(1);
  const [postPerPage, setPostperPage] = useState(0);
  const calcEndpoint = () => {
    const limit = postPerPage;
    const skip = (pagination - 1) * postPerPage;
    return `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;
  };

  // const endpoint = "https://dummyjson.com/posts?limit=0&skip=0";
  const [posts, setPosts] = useState([]);
  const getData = () => {
    axios
      .get(calcEndpoint())
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, [pagination, postPerPage]);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Posts</h1>
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          postPerPage={postPerPage}
          setPostperPage={setPostperPage}
        />
        <PostPerPage setPostperPage={setPostperPage} />
      </div>
      <Card posts={posts} />
    </div>
  );
};

export default Posts;
