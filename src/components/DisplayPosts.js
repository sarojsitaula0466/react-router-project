import React from "react";
import { Link } from "react-router-dom";

const DisplayPosts = ({ id, test, data, del }) => {
  const ids = Number(id);
  //console.log(ids)
  console.log(test);
  console.log("data", data);
  console.log("abc", id);
  const filteredPosts = data.filter(a => a.id === ids);
  console.log("filteredPosts.", filteredPosts);

  return (
    <div className="post-page-container">
      <div className="post-buttons">
        <Link to="/" className="back-button">
          <button className="back-button">Back to Posts</button>
        </Link>
        <Link to="/" className="back-button">
          <button onClick={() => del(ids)} className="back-button">
            Delete Post
          </button>
        </Link>
      </div>
      <div className="post-content-container">
     
        <div className="post-text">
          <p>
            <span>Title:</span>
            {filteredPosts[0].title}
          </p>
        </div>
        <div className="post-text">
          <p>
            <span>Category:</span>
            {filteredPosts[0].category}
          </p>
        </div>
        <div className="post-text">
          <p>{filteredPosts[0].text}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayPosts;
