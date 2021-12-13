import React, { Component, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./LoginModal.css";
import Payment from "./Payment";
import { displayRazorpay } from "./razorpay";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "92%",
  bgcolor: "#242424",

  boxShadow: 24,
  p: 4,
};



const LoginModal = ({ openbtn, closebtn, open }) => {
  const [value, showValue] = useState(false);

  const [open1, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container">
      <Modal
        open={open}
        onClose={closebtn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="mb-5">
          <div className="btn-modal d-flex flex-lg-row flex-column align-items-lg-start align-items-center justify-content-center">
            <div className="guest-btn-modal">
              <button
                className="openPayment me-lg-5 me-0"
                onClick={displayRazorpay}
              >
                Continue as Guest
              </button>
            </div>
            <div className="login-btn-modal ms-0 mt-5 mt-lg-0 ms-lg-5">
              <button className="openPayment" onClick={() => showValue(!value)}>
                Log in to Gift
              </button>
              {console.log(value)}
              {value && (
                <div className="show-extra d-block">
                  <div className="btn-yourname mt-3 mb-3">
                    <button className="yourname" onClick={handleOpen}>
                      Your name
                    </button>
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <div className="btn-yourname mt-3 mb-3">
                    <button className="yourname" onClick={handleOpen}>
                      Mobile
                    </button>
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <div className="btn-yourname mt-3 mb-3">
                    <button className="yourname" onClick={handleOpen}>
                      Email
                    </button>
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <div className="btn-yourname mt-3 mb-3">
                    <button className="yourname" onClick={handleOpen}>
                      Otp
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
      <Payment open1={open1} openModal={handleOpen} closeModal={handleClose} />
    </div>
  );
};

export default LoginModal;