import { MoreHorizOutlined } from "@mui/icons-material";
import React from "react";
import Avatar from "./avatar";

export default function Media({ avatar, title, subTitle, timestamp, content }) {
  return (
    <section>
      <article className="post-status__media">
        <div className="media">
          <Avatar src={avatar} className="avatar--medium" />
          <div>
            <span className="post__author-name post-status__author-name">
              {title}
            </span>
            <span className="post__author-username post-status__author-username">
              {subTitle}
            </span>
            <span className="post-status__timestamp">{timestamp}</span>
          </div>
        </div>
        <MoreHorizOutlined />
      </article>
      {content && <span>{content}</span>}
    </section>
  );
}
