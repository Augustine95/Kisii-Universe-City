import React, { useRef, useState } from "react";
import Cancel from "@mui/icons-material/Cancel";
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
  ChildModal,
  currentUser,
  onEmojiIconClick,
  onPhotoIconClick,
  onPost: onPostUpload,
  postPhoto,
  onPostFormClose,
  postFormOpen,
}) {
  const [postMessage, setPostMessage] = useState("");

  const selectedFileRef = useRef();

  const handlePostMessageChange = ({ currentTarget: input }) =>
    setPostMessage(input.value);

  return (
    <AppModal
      ChildModal={ChildModal}
      open={postFormOpen}
      onClose={onPostFormClose}
    >
      <article className="card post-form">
        <header className="card__header">
          <h1 className="plan__heading">create post</h1>
          <Cancel className="post-form__cancel-btn" onClick={onPostFormClose} />
        </header>
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
            onChange={handlePostMessageChange}
            autoFocus
          />
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
        </section>
      </article>
    </AppModal>
  );
}
