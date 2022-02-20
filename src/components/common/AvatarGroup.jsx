import React from "react";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function AppAvatarGroup({ max, children }) {
  return <AvatarGroup max={max}>{children}</AvatarGroup>;
}
