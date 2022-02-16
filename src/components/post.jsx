import React from "react";

import Avatar from "./avatar";
import pic from "../images/augustine.png";
import PostFooter from "./postFooter";
import ListGroup from "./listGroup";
import PostHeader from "./PostHeader";

const Post = ({
  avatar = pic,
  username,
  name,
  timestamp,
  postContent,
  onPost,
  onLike,
  isAdmin,
  liked,
  likesCount,
  onReply,
  replyMessage,
  onReplyChange,
  onCommentActiveSwitch,
  isCommentActive,
}) => {
  return (
    <section className="media">
      <Avatar src={avatar} className="avatar--medium" />
      <section className="post">
        <PostHeader
          isAdmin={isAdmin}
          name={name}
          onPost={onPost}
          timestamp={timestamp}
          username={username}
        />
        <span className="post__message">{postContent}</span>
        <PostFooter
          liked={liked}
          likesCount={likesCount}
          onComment={onCommentActiveSwitch}
          onLike={onLike}
        />
        {isCommentActive && (
          <ListGroup
            avatar={avatar}
            btnLabel="Reply"
            className="post"
            btnClassName="btn--small"
            onClick={onReply}
            value={replyMessage}
            onChange={onReplyChange}
            placeholder="Post your reply..."
          />
        )}
      </section>
    </section>
  );
};

export default Post;
