import {
  CommentOutlined,
  HeartBrokenRounded,
  Share,
  Verified,
} from "@mui/icons-material";
import React from "react";
import pic from "../images/augustine.png";
import Avatar from "./avatar";

export default function Post({
  avatar = pic,
  username,
  name,
  timestamp,
  postContent,
  onPost,
  isAdmin,
}) {
  return (
    <article>
      <section className="media">
        <Avatar src={avatar} className="avatar--medium" />
        <section className="post">
          <header className="post__header">
            <div className="post__author-name-container">
              <span className="post__authour-name">{name}</span>
              {isAdmin && <Verified fontSize="small" />}
            </div>
            <div className="post__authour-username-container">
              <span className="post__authour-username" onClick={onPost}>
                {username}
              </span>
              <span>{timestamp}</span>
            </div>
          </header>
          <span className="post__message">{postContent}</span>
          <footer className="post__footer">
            <HeartBrokenRounded />
            <CommentOutlined />
            <Share />
          </footer>
        </section>
      </section>
    </article>
  );
}
