import React, { useState } from "react";
import PostCreator from "./postCreator";
import CreatePostCard from "./createPostCard";
import avatar from "../images/augustine.png";
import NewPostCard from "./newPostCard";

export default function CreatePost() {
  const [isPostActive, setIsPostActive] = useState(false);
  const [isPostEmojiActive, setIsPostEmojiActive] = useState(false);
  const [postMessage, setPostMessage] = useState("");
  const [postPhoto, setPostPhoto] = useState("");

  const handleAddPostMessage = ({ currentTarget: input }) =>
    setPostMessage(input.value);

  const handleRemovePostPhoto = () => setPostPhoto("");

  const handleAddPostPhoto = (e) => {
    try {
      const reader = new FileReader();
      reader.onload = () => setPostPhoto(reader.result);
      reader.readAsDataURL(e.target.files[0]);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handlePostEmojiActive = () => setIsPostEmojiActive(!isPostEmojiActive);

  const handleAddPostEmoji = ({ native }) =>
    setPostMessage(postMessage + native);

  const handlePostUpload = () => {
    setIsPostEmojiActive(false);
    setIsPostActive(false);
    setPostPhoto("");
    setPostMessage("");
  };

  return (
    <section>
      <PostCreator
        avatar={avatar}
        onClick={() => setIsPostActive(!isPostActive)}
      />
      {isPostActive && (
        // <NewPostCard />
        <CreatePostCard
          postPhoto={postPhoto}
          postMessage={postMessage}
          isPostEmojiActive={isPostEmojiActive}
          onAddPostEmoji={handleAddPostEmoji}
          onAddPostMessage={handleAddPostMessage}
          onAddPostPhoto={handleAddPostPhoto}
          onRemovePostPhoto={handleRemovePostPhoto}
          onPostEmojiActive={handlePostEmojiActive}
          onPostUpload={handlePostUpload}
        />
      )}
    </section>
  );
}
