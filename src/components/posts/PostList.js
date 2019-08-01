import React from "react";
import PostSummary from "./PostSummary";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="post-list section">
      {posts && posts.map(post => {
        return (
          <PostSummary
            key={post.id}
            post={post}
          />
        );
      })}

      {/* <PostSummary />
      <PostSummary /> */}
    </div>
  );
};

export default PostList;
