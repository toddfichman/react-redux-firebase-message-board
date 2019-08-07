import React, { useState } from "react";
import PostSummary from "./PostSummary";
import Pagination from './Pagination';
import { Link } from "react-router-dom";


const PostList = ({ posts }) => {
  

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  console.log(currentPage, "currentPage");
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="post-list section">
      {posts &&
        currentPosts.map(post => {
          return (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <PostSummary post={post} />
            </Link>
          );
        })}
      <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
};

export default PostList;
