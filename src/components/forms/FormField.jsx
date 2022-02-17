import React from "react";
import { useFormikContext } from "formik";

import Input from "../input";
import ErrorMessage from "./ErrorMessage";

export default function FormField({ label, type = "text", ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();

  const name = label.toLowerCase();

  return (
    <>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <Input
        id={name}
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        placeholder={label}
        type={type}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
