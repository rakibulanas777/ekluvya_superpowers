import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./video.css";

const VideoModal = ({ openbtn2, closebtn2, open2, videofile }) => {
  return (
    <div>
      <Modal
        open={open2}
        onClose={closebtn2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="video-box">
          <video width="100%" className="video" height="auto" autoPlay controls>
            <source src={videofile.video} type="video/mp4" />
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
