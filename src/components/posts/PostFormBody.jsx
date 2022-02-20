import React from "react";

import Avatar from "../avatar";
import DropDownList from "../common/DropDownList";
import TextArea from "../common/TextArea";

const targetGroup = [
  { value: 1, label: "Everyone" },
  { value: 2, label: "My Class" },
  { value: 3, label: "My School" },
];

const currentUser = { id: 1, name: "Augustine Awuori", username: "@augustine" };

export default function PostFormBody({
  onPostMessageChange,
  postMessage,
  postPhoto,
}) {
  return (
    <section className="card__body">
      <article className="media plan__media">
        <Avatar src={currentUser.avatar} className="avatar--small" />
        <div>
          <span className="plan__author">{currentUser.name}</span>
          <DropDownList data={targetGroup} />
        </div>
      </article>
      <TextArea
        placeholder="Tell us what's going on?"
        value={postMessage}
        onChange={onPostMessageChange}
        autoFocus
      />
      {postPhoto && <img src={postPhoto} alt="post" />}
    </section>
  );
}
