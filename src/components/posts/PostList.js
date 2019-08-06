import React from "react";
import PostSummary from "./PostSummary";
import {Link} from 'react-router-dom'

const PostList = ({ posts }) => {
  console.log(posts, 'posts');
  return (
    <div className="post-list section">
      {posts && posts.map(post => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <PostSummary
              
              post={post}
            />
          </Link>
        );
      })}

      {/* <PostSummary />
      <PostSummary /> */}
    </div>
  );
};

export default PostList;
