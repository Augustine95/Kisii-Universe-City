import React, { useState } from "react";

import AppButton from "../common/AppButton";
import AppModal from "../common/AppModal";
import PostFormHeader from "../forms/PostFormHeader";
import PostFormBody from "./PostFormBody";
import PostFormFooter from "./PostFormFooter";

export default function PostForm({
  ChildModal,
  onEmojiIconClick,
  onPost: onPostUpload,
  onPostFormClose,
  postFormOpen,
  postPhoto,
}) {
  const [postMessage, setPostMessage] = useState("");

  const handlePostMessageChange = ({ currentTarget: input }) =>
    setPostMessage(input.value);

  return (
    <AppModal
      ChildModal={ChildModal}
      open={postFormOpen}
      onClose={onPostFormClose}
    >
      <article className="card post-form">
        <PostFormHeader
          heading="create post"
          onPostFormClose={onPostFormClose}
        />
        <PostFormBody
          postPhoto={postPhoto}
          postMessage={postMessage}
          onPostMessageChange={handlePostMessageChange}
        />
        <PostFormFooter onEmojiIconClick={onEmojiIconClick} />
        <AppButton
          title="Post"
          onClick={onPostUpload}
          className="btn btn--long btn--primary btn--outline"
        />
      </article>
    </AppModal>
  );
}
