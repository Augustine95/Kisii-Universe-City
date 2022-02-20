import React from "react";
import Cancel from "@mui/icons-material/Cancel";

export default function PostFormHeader({ heading, onPostFormClose }) {
  return (
    <header className="card__header">
      <h1 className="plan__heading">{heading}</h1>
      <Cancel className="post-form__cancel-btn" onClick={onPostFormClose} />
    </header>
  );
}
