import React from "react";
import { useFormikContext } from "formik";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <button
      className="btn btn--stretched btn--primary"
      type="submit"
      onClick={handleSubmit}
    >
      {title}
    </button>
  );
}
