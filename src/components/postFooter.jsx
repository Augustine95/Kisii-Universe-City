import React from "react";
import { CommentOutlined, Share } from "@mui/icons-material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

const PostFooter = ({ className, liked, onLike, likesCount, onComment }) => {
  const getClassName = () => {
    let name = "post__footer ";
    if (className) name += className;
    return name;
  };

  return (
    <footer className={getClassName()}>
      <span className="icon-container">
        {liked ? (
          <FavoriteRoundedIcon onClick={onLike} className="icon" />
        ) : (
          <FavoriteBorderRoundedIcon onClick={onLike} className="icon" />
        )}
        {likesCount ? likesCount : ""}
      </span>
      <ChatBubbleOutlineRoundedIcon className="icon" onClick={onComment} />
      <Share />
    </footer>
  );
};

export default PostFooter;
