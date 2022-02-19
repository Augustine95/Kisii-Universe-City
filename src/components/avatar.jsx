import React from "react";
import Avatar from "@mui/material/Avatar";

const currentUser = { id: 1, name: "Augustine Awuroi", username: "@augustine" };

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function AppAvatar({ src, className }) {
  const getClassName = () => {
    let name = "avatar media__image ";
    if (className) name += className;
    return name;
  };

  return (
    <Avatar
      {...stringAvatar(currentUser.name)}
      alt="Post"
      className={getClassName()}
      draggable="false"
      src={src}
    />
  );
}
