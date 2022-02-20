import React from "react";
import Verified from "@mui/icons-material/Verified";

export default function PostHeader({
  name,
  isAdmin,
  onPost,
  timestamp,
  username,
}) {
  return (
    <header className="post__header">
      <div className="post__author-name-container">
        <span className="post__author-name">{name}</span>
        {isAdmin && <Verified fontSize="small" />}
      </div>
      <div className="post__author-username-container">
        <span className="post__author-username" onClick={onPost}>
          {username}
        </span>
        <span>{timestamp}</span>
      </div>
    </header>
  );
}
