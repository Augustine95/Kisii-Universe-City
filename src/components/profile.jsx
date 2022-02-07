import {
  Comment,
  CommentBankOutlined,
  CommentOutlined,
  HeartBrokenOutlined,
  HeartBrokenRounded,
  MoreHorizOutlined,
  MoreOutlined,
  Share,
  Verified,
} from "@mui/icons-material";
import React from "react";
import avatar from "../images/augustine.png";
import Avatar from "./avatar";

export default function Profile() {
  const posts = [
    {
      id: 1,
      avatar,
      username: "@augustineawuori",
      name: "Augustine Awuori",
      postMessage: "This is me man",
      time: "20h",
      isAdmin: true,
    },
    {
      id: 2,
      avatar,
      username: "@awuoriaugustine",
      name: "Augustine Aramba",
      postMessage:
        "I thank God for everything he Has done for me even though I am a sinner",
      time: "20h",
    },
  ];

  return (
    <article>
      {posts.map((post) => (
        <section className="media">
          <Avatar src={post.avatar} />
          <section className="post">
            <header className="post__header">
              <div className="post__author-name-container">
                <span className="post__authour-name">{post.name}</span>
                {post.isAdmin && <Verified fontSize="small" />}
              </div>
              <span className="post__authour-username">{post.username}</span>
            </header>
            <span className="post__message">{post.postMessage}</span>
            <footer className="post__footer">
              <HeartBrokenRounded />
              <CommentOutlined />
              <Share />
            </footer>
          </section>
        </section>
      ))}
    </article>
  );
}
