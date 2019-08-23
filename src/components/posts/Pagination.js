import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, executeScroll }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination ">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={
              "page-number-container " + (number === currentPage ? "active-page" : null)
            }
          >
            <a className={"page-number-content " + (number === currentPage ? "active-number" : null)}onClick={() => {paginate(number)}} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
