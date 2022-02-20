import React, { useState } from "react";
import { Picker } from "emoji-mart";

import AppButton from "../common/AppButton";
import AppModal from "../common/AppModal";
import PostFormHeader from "../forms/PostFormHeader";
import PostFormBody from "./PostFormBody";
import PostFormFooter from "./PostFormFooter";

const childModalStyles = {
  top: "80%",
  width: "auto",
  background: 0,
  boxShadow: 0,
  right: "0",
};

export default function PostForm({
  onPostUpload,
  onPostFormClose,
  postFormOpen,
  postPhoto,
}) {
  const [postMessage, setPostMessage] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);

  const getChildModal = () => (
    <AppModal
      onClose={handleEmojiOpen}
      open={emojiOpen}
      styles={childModalStyles}
    >
      <Picker
        autoFocus
        onSelect={(e) => handleAddPostEmoji(e)}
        theme="auto"
        sheetSize={32}
      />
    </AppModal>
  );

  function handleAddPostEmoji({ native }) {
    setPostMessage(postMessage + native);
  }

  function handleEmojiOpen() {
    setEmojiOpen(!emojiOpen);
  }

  const handlePostMessageChange = ({ currentTarget: input }) =>
    setPostMessage(input.value);

  return (
    <AppModal
      ChildModal={getChildModal()}
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
        <PostFormFooter onEmojiIconClick={handleEmojiOpen} />
        <AppButton
          title="Post"
          onClick={onPostUpload}
          className="btn btn--long btn--primary btn--outline"
        />
      </article>
    </AppModal>
  );
}
