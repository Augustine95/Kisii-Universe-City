import React from "react";
import { Close, EmojiEmotions, Photo } from "@mui/icons-material";

import Avatar from "../avatar";
import DropDownList from "../common/DropDownList";
import TextArea from "../common/TextArea";

const targetGroup = [
  { value: 1, label: "Everyone" },
  { value: 2, label: "My Class" },
  { value: 3, label: "My School" },
];

export default function PostBadge({ currentUser }) {
  return (
    <article className="card post-form">
      <header className="card__header">
        <h1 className="plan__heading">create post</h1>
        {/* <Close /> */}
      </header>
      <section className="card__body">
        <article className="media plan__media">
          <Avatar src={currentUser.avatar} className="avatar--small" />
          <div>
            <span className="plan__author">{currentUser.name}</span>
            <DropDownList data={targetGroup} />
          </div>
        </article>
        <TextArea placeholder="Tell us what's going on?" autoFocus />
      </section>
      <footer className="plan__footer">
        <span className="plan__footer__heading">Add to your post</span>
        <article className="plan__footer__icons">
          <Photo />
          <EmojiEmotions />
        </article>
      </footer>
      <button className="btn btn--long btn--primary btn--outline">Post</button>
    </article>
  );
}
