import React, { useRef } from "react";
import { EmojiEmotions, Photo } from "@mui/icons-material";

import AppButton from "../common/AppButton";
import AppModal from "../common/AppModal";
import Avatar from "../avatar";
import DropDownList from "../common/DropDownList";
import TextArea from "../common/TextArea";

const targetGroup = [
  { value: 1, label: "Everyone" },
  { value: 2, label: "My Class" },
  { value: 3, label: "My School" },
];

export default function PostForm({
  currentUser,
  onEmojiIconClick,
  onPhotoIconClick,
  onPost: onPostUpload,
  postPhoto,
  onPostFormClose,
  postFormOpen,
}) {
  const selectedFileRef = useRef();

  return (
    <AppModal open={postFormOpen} onClose={onPostFormClose}>
      <article className="card post-form">
        <header className="card__header">
          <h1 className="plan__heading">create post</h1>
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
          {postPhoto && <img src={postPhoto} alt="post" />}
        </section>
        <footer className="plan__footer">
          <span className="plan__footer__heading">Add to your post</span>
          <article className="plan__footer__icons">
            {/* <Photo onClick={onPhotoIconClick} ref={selectedFileRef} /> */}
            <input type="file" ref={selectedFileRef} />
            <EmojiEmotions onClick={onEmojiIconClick} />
          </article>
        </footer>
        <section className="post-form__btn-container">
          <AppButton
            title="Post"
            onClick={onPostUpload}
            className="btn btn--long btn--primary btn--outline"
          />
          <AppButton
            title="Cancel"
            onClick={onPostFormClose}
            className="btn btn--long btn--secondary"
          />
        </section>
      </article>
    </AppModal>
  );
}
