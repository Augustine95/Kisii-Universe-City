import React from "react";
import { Picker } from "emoji-mart";
import Avatar from "../avatar";
import CreatePostFooter from "./createPostFooter";
import CreatePostBody from "./CreatePostBody";
import avatar from "../../images/augustine.png";
import PostBadge from "./PostBadge";

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
}) {
  const currentUser = { name: "Augustine Awuori II", avatar };

  return (
    <section>
      {/* <section className="media"> */}
      {/* <Avatar src={avatar} /> */}
      <PostBadge currentUser={currentUser} />
      {/* </section> */}
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
{
  /* <CreatePostBody
            onAddPostMessage={onAddPostMessage}
            onRemovePostPhoto={onRemovePostPhoto}
            postPhoto={postPhoto}
          />
          <CreatePostFooter
            onAddPostPhoto={onAddPostPhoto}
            onPostEmojiActive={onPostEmojiActive}
            onPostUpload={onPostUpload}
            postPhoto={postPhoto}
            postMessage={postMessage}
          /> */
}
