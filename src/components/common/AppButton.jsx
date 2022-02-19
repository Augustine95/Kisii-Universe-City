import React from "react";

export default function AppButton({ className, onClick, title }) {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
}
