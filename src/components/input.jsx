import React from "react";

export default function Input({ ...otherProps }) {
  return <input type="text" className="input" {...otherProps} />;
}
