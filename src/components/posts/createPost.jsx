import React, { useState } from "react";

import avatar from "../../images/augustine.png";
import PostCreator from "./postCreator";
import PostForm from "./PostForm";

export default function CreatePost() {
  const [postFormOpen, setPostFormOpen] = useState(false);
  const [postPhoto, setPostPhoto] = useState("");

  const handleAddPostPhoto = (e) => {
    try {
      const reader = new FileReader();
      reader.onload = () => setPostPhoto(reader.result);
      reader.readAsDataURL(e.target.files[0]);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handlePostUpload = () => {};

  const handlePostFormOpen = () => setPostFormOpen(!postFormOpen);

  return (
    <>
      <PostCreator avatar={avatar} onClick={handlePostFormOpen} />
      <PostForm
        onAddPostPhoto={handleAddPostPhoto}
        onPostFormClose={handlePostFormOpen}
        onPostUpload={handlePostUpload}
        postFormOpen={postFormOpen}
        postPhoto={postPhoto}
      />
    </>
  );
}
