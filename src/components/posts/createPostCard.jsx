import React, { useState } from "react";
import { Picker } from "emoji-mart";

import PostForm from "./PostForm";
import AppModal from "../common/AppModal";

export default function CreatePostCard({
  onAddPostEmoji,
  onAddPostMessage,
  onAddPostPhoto,
  onPostEmojiActive,
  onPostUpload,
  onRemovePostPhoto,
  postMessage,
  postPhoto,
  onPostFormClose,
  postFormOpen,
}) {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const childModalStyles = {
    top: "80%",
    width: "auto",
    background: 0,
    boxShadow: 0,
    right: "0",
  };

  const handleEmojiOpen = () => setEmojiOpen(!emojiOpen);

  const getChildModal = () => (
    <AppModal
      onClose={handleEmojiOpen}
      open={emojiOpen}
      styles={childModalStyles}
    >
      <Picker
        autoFocus
        onSelect={(e) => onAddPostEmoji(e)}
        theme="auto"
        sheetSize={32}
      />
    </AppModal>
  );

  return (
    <section>
      <PostForm
        ChildModal={getChildModal()}
        onEmojiIconClick={handleEmojiOpen}
        onPhotoIconClick={onAddPostPhoto}
        onPostFormClose={onPostFormClose}
        onPostUpload={onPostUpload}
        postFormOpen={postFormOpen}
        postPhoto={postPhoto}
      />
    </section>
  );
}
