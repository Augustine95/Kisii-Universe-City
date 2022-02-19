import React, { useState } from "react";
import { Picker } from "emoji-mart";

import avatar from "../../images/augustine.png";
import PostForm from "./PostForm";

export default function CreatePostCard({
  isPostEmojiActive,
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
  const currentUser = { name: "Augustine Awuori II", avatar };

  return (
    <section>
      <PostForm
        currentUser={currentUser}
        onEmojiIconClick={onPostEmojiActive}
        onPhotoIconClick={onAddPostPhoto}
        onPost={onPostUpload}
        onPostCancel
        postPhoto={postPhoto}
        onPostFormClose={onPostFormClose}
        postFormOpen={postFormOpen}
      />
      {isPostEmojiActive && (
        <Picker
          autoFocus
          onSelect={(e) => onAddPostEmoji(e)}
          theme="auto"
          sheetSize={32}
        />
      )}
    </section>
  );
}
