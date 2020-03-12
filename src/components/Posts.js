import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ blog}) => {
  const postBlog = blog.map(post => (
    <Link className='test-link' to= {`/post/${post.id}`}><div className="posts">
      <h2 className='post-title'>{post.title}</h2>
      <h2 className='post-category'>{post.category}</h2>
    </div></Link>
  ));
  return (
    <div className="landingPage">
      {" "}
      <Link className='test-link' to="/about"><p className='addPost'>ADD POST</p></Link>
      {postBlog}
    </div>
  );
};

export default Posts;
