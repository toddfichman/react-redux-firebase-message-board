import React, { useState, useRef } from "react";
import PostSummary from "./PostSummary";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const PostList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  console.log(currentPage, "currentPage");

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    executeScroll()
  };

  

  return (
    <div ref={myRef} className="post-list section">
      {posts &&
        currentPosts.map(post => {
          return (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <PostSummary post={post} />
            </Link>
          );
        })}
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        // executeScroll={executeScroll}
      />
    </div>
  );
};

export default PostList;
