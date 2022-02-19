import React, { useState } from "react";

import avatar from "../../images/augustine.png";
import CreatePostCard from "./createPostCard";
import PostCreator from "./postCreator";

export default function CreatePost() {
  const [isPostEmojiActive, setIsPostEmojiActive] = useState(false);
  const [postFormOpen, setPostFormOpen] = useState(false);
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
    setPostPhoto("");
    setPostMessage("");
  };

  const handlePostFormOpen = () => setPostFormOpen(!postFormOpen);

  return (
    <section>
      <PostCreator avatar={avatar} onClick={handlePostFormOpen} />
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
        postFormOpen={postFormOpen}
        onPostFormClose={handlePostFormOpen}
      />
    </section>
  );
}
