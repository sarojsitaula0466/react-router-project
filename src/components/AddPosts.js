import React from "react";
import { Link } from "react-router-dom";

const AddPosts = ({ user, onChange, onClick, history }) => {
  console.log(history);
  const { title, category, text } = user;
  return (
    <div className="newPost-wrapper">
      <div className="user-input-div">
        <label>
          Title:
          <input
            key={title}
            type="text"
            name="title"
            value={title}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="user-input-div">
        <label>
          Category:
          <input
            key={category}
            type="text"
            name="category"
            value={category}
            onChange={onChange}
          />
        </label>
      </div>

      <div className="user-input-div">
        <label>
          Write a new post:
          <textarea
            key={text}
            type="text"
            name="text"
            value={text}
            onChange={onChange}
            className="textInput"
          />
        </label>
      </div>

      {/*  <button>Save</button> */}
      <div className="buttons">
        <div>
          <Link to="/">
            <button onClick={onClick} className="buttonsInside">
              SAVE
            </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button className="buttonsInside">CANCEL</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddPosts;
