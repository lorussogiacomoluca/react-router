import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [allTags, setAllTags] = useState([]);
  const endpoint = "https://dummyjson.com/posts/tags";

  const getAllTag = () => {
    axios.get(endpoint).then((response) => {
      setAllTags(response.data);
    });
  };
  useEffect(() => {
    getAllTag();
  }, []);
  return (
    <div>
      <h1>Sidebar</h1>
      <h5>Ricerca per tag:</h5>
      <div className="row">
        <div className="col">
          {allTags.map((tag) => (
            <NavLink to={`/posts/tag/${tag.slug}`} key={tag.slug}>
              <span className="badge text-bg-warning me-2">{tag.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
