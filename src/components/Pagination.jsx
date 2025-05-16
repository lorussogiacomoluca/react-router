import React, { useEffect } from "react";
import PostPerPage from "./PostPerPage";

const Pagination = ({
  pagination,
  setPagination,
  postPerPage,
  setPostPerPage,
}) => {
  useEffect(() => {
    if (postPerPage === 0) {
      setPagination(1);
    }
  }, [postPerPage]);

  return (
    <>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item">
            <a
              onClick={() => setPagination((prev) => prev - 1)}
              className={
                pagination === 1
                  ? "page-link disabled"
                  : "page-link cursor-pointer"
              }
            >
              Previous
            </a>
          </li>
          <li className={pagination === 1 ? "d-none" : "page-item"}>
            <a
              className="page-link"
              href="#"
              onClick={() => setPagination((prev) => prev - 1)}
            >
              {pagination - 1}
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#" aria-current="page">
              {pagination}
            </a>
          </li>
          <li
            className={
              pagination === 42 || postPerPage === 0 ? "d-none" : "page-item"
            }
          >
            <a
              className="page-link"
              href="#"
              onClick={() => setPagination((prev) => prev + 1)}
            >
              {pagination + 1}
            </a>
          </li>
          <li className="page-item">
            <a
              className={
                pagination === 42 || postPerPage === 0
                  ? "page-link disabled"
                  : "page-link cursor-pointer"
              }
              onClick={() => setPagination((prev) => prev + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
