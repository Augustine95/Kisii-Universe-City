import React from "react";

import Avatar from "./avatar";
import Input from "./input";

export default function ListGroup({
  avatar,
  btnClassName,
  btnLabel,
  className,
  onClick,
  value,
  ...otherProps
}) {
  const getContainerClass = () => {
    let name = "input-group ";
    if (className) name += className;
    return name;
  };

  const getBtnClassName = () => {
    let name = "btn btn--primary ";
    if (btnClassName) name += btnClassName;
    return name;
  };

  return (
    <article className={getContainerClass()}>
      <Avatar src={avatar} className="avatar--medium" />
      <Input {...otherProps} value={value} />
      <button className={getBtnClassName()} onClick={onClick} disabled={!value}>
        {btnLabel}
      </button>
    </article>
  );
}
