import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import avatar from "../../images/augustine.png";
import PostForm from "../posts/PostForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
};

export default function Members() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <section>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 4000 }}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <PostForm
              currentUser={{
                name: "Augustine Awuori",
                username: "@awuoriaugustine",
                avatar,
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </section>
  );
}
