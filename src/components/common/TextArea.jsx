import React from "react";
import TextAreaAutosize from "@mui/material/TextareaAutosize";

export default function TextArea({ ...otherProps }) {
  return <TextAreaAutosize className="textarea" {...otherProps} />;
}
