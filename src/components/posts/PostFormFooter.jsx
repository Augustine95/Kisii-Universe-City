import React from "react";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";

export default function PostFormFooter({ onEmojiIconClick, onPostUpload }) {
  return (
    <footer className="plan__footer">
      <span className="plan__footer__heading">Add to your post</span>
      <article className="plan__footer__icons">
        {/* <Photo onClick={onPhotoIconClick} ref={selectedFileRef} /> */}
        <input type="file" r />
        <EmojiEmotions onClick={onEmojiIconClick} />
      </article>
    </footer>
  );
}
