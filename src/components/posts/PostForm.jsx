import React, { useRef, useState } from "react";
import { EmojiEmotions, Photo } from "@mui/icons-material";

import AppButton from "../common/AppButton";
import AppModal from "../common/AppModal";
import DropDownList from "../common/DropDownList";
import TextArea from "../common/TextArea";
import PostFormHeader from "../forms/PostFormHeader";
import PostFormBody from "./PostFormBody";
import PostFormFooter from "./PostFormFooter";

const targetGroup = [
  { value: 1, label: "Everyone" },
  { value: 2, label: "My Class" },
  { value: 3, label: "My School" },
];

export default function PostForm({
  ChildModal,
  currentUser,
  onEmojiIconClick,
  onPhotoIconClick,
  onPost: onPostUpload,
  postPhoto,
  onPostFormClose,
  postFormOpen,
}) {
  const [postMessage, setPostMessage] = useState("");

  const selectedFileRef = useRef();

  const handlePostMessageChange = ({ currentTarget: input }) =>
    setPostMessage(input.value);

  return (
    <AppModal
      ChildModal={ChildModal}
      open={postFormOpen}
      onClose={onPostFormClose}
    >
      <>
        <article className="card post-form post-form--small">
          <PostFormHeader
            heading="create post"
            onPostFormClose={onPostFormClose}
          />
          <PostFormBody
            postPhoto={postPhoto}
            onPostMessageChange={handlePostMessageChange}
          />
          <PostFormFooter onEmojiIconClick={onEmojiIconClick} />
          <AppButton
            title="Post"
            onClick={onPostUpload}
            className="btn btn--long btn--primary btn--outline"
          />
        </article>

        <article className="card post-form plan post-form--large">
          <PostFormHeader
            heading="create post"
            onPostFormClose={onPostFormClose}
          />
          <PostFormBody
            postPhoto={postPhoto}
            onPostMessageChange={handlePostMessageChange}
          />
          <PostFormFooter onEmojiIconClick={onEmojiIconClick} />
          <AppButton
            title="Post"
            onClick={onPostUpload}
            className="btn btn--long btn--primary btn--outline"
          />
        </article>
      </>
    </AppModal>
  );
}
