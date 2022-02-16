import React from "react";
import { ArrowBack } from "@mui/icons-material";

import PostFooter from "./postFooter";
import ListGroup from "./listGroup";
import Media from "./media";

export default function PostStatus({ author, time, postMessage, comments }) {
  console.log(author);

  return (
    <section className="post-status">
      <article className="post-status__header">
        <ArrowBack className="icon--back" />
        <h1 className="post-status__title">Post</h1>
      </article>
      <Media
        avatar={author.avatar}
        subTitle={author.username}
        timestamp={time}
        title={author.name}
      />
      <section className="post-status__body">
        <span className="post-status__post-message">{postMessage}</span>
      </section>
      <PostFooter className="post-status__footer" />
      <ListGroup avatar={author.avatar} btnLabel="Reply" />
      {comments.map((comment) => (
        <Media
          key={comment.id}
          avatar={comment.author.avatar}
          title={comment.author.name}
          subTitle={comment.author.username}
          content={comment.body.message}
        />
      ))}
    </section>
  );
}
