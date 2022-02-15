import React from "react";
import { Verified } from "@mui/icons-material";

import Avatar from "./avatar";
import pic from "../images/augustine.png";
import PostFooter from "./postFooter";

const Post = ({
  avatar = pic,
  username,
  name,
  timestamp,
  postContent,
  onPost,
  onLike,
  isAdmin,
  liked,
  likesCount,
}) => {
  return (
    <section className="media">
      <Avatar src={avatar} className="avatar--medium" />
      <section className="post">
        <header className="post__header">
          <div className="post__author-name-container">
            <span className="post__author-name">{name}</span>
            {isAdmin && <Verified fontSize="small" />}
          </div>
          <div className="post__author-username-container">
            <span className="post__author-username" onClick={onPost}>
              {username}
            </span>
            <span>{timestamp}</span>
          </div>
        </header>
        <span className="post__message">{postContent}</span>
        <PostFooter liked={liked} onLike={onLike} likesCount={likesCount} />
      </section>
    </section>
  );
};

export default Post;
