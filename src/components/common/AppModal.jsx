import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

const style = {
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "40rem",
};

export default function AppModal({ children, open, onClose, timeout = 4000 }) {
  return (
    <Modal
      aria-describedby="transition-modal-description"
      aria-labelledby="transition-modal-title"
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout }}
      closeAfterTransition
      onClose={onClose}
      open={open}
    >
      <Fade in={open}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}
