import React from "react";

import Input from "../input";

export default function FormField({
  error,
  label,
  type = "text",
  ...otherProps
}) {
  const name = label.toLowerCase();

  return (
    <>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <Input placeholder={label} id={name} type={type} {...otherProps} />
      <span className="input__error-message">{error}</span>
    </>
  );
}
