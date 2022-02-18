import React from "react";

export default function TextArea({ ...otherProps }) {
  return <textarea className="textarea" {...otherProps} />;
}
