import React from "react";

export default function DropDownList({ data }) {
  return (
    <select className="select">
      {data.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
