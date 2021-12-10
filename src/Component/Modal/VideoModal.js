import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./video.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  p: 4,
};
const VideoModal = ({ openbtn2, closebtn2, open2 }) => {
  return (
    <div>
      <Modal
        open={open2}
        onClose={closebtn2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <video width="100%" className="video" height="auto" controls>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
          <div className="cross-icon" onClick={closebtn2}>
            <i class="fas fa-times"></i>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default VideoModal;
