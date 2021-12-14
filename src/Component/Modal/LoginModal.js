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
  height: "96%",
  bgcolor: "#242424",

  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ openbtn, closebtn, open }) => {
  const [value, showValue] = useState(false);

  const [open1, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (e) => {
    e.preventDefault();
  };

  ///get value
  const [registerData, setRegisterData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  console.log(registerData);
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
            {/* <div className="guest-btn-modal">
              <button
                className="openPayment me-lg-5 me-0"
                onClick={displayRazorpay}
              >
                Continue as Guest
              </button>
            </div> */}
            <div className="login-btn-modal ms-0 mt-5 mt-lg-0 ms-lg-5">
              <div className=" d-flex justify-content-center">
                {/* this is for display info */}
                <button className="openPayment mb-5">User Info</button>
              </div>
              <form onSubmit={handleClick}>
                <div
                  className="show-extra d-flex  flex-column align-items-lg-center align-items-center"
                  style={{ gap: "5px" }}
                >
                  <div className="btn-yourname ">
                    {/* this is input */}
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your name"
                      name="YourName"
                      required
                      onBlur={handleOnChange}
                    />
                    <i class="fas fa-angle-right"></i>
                  </div>
                  {/* this is input */}

                  <div className="btn-yourname ">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Phone Number"
                      name="mobile"
                      required
                      onBlur={handleOnChange}
                    />
                    <i class="fas fa-angle-right"></i>
                  </div>
                  {/* this is input */}

                  <div className="btn-yourname ">
                    <input
                      type="email   "
                      className="input-field"
                      placeholder="Email adress"
                      name="email"
                      required
                      onBlur={handleOnChange}
                    />
                    <i class="fas fa-angle-right"></i>
                  </div>

                  {/* This is the button  */}
                  <div className="btn-yourname ">
                    <button className="yourname" type="submit">
                      Send Otp
                    </button>
                  </div>
                </div>

                <div
                  className=" d-flex  flex-column align-items-lg-center align-items-center"
                  style={{ gap: "5px", marginTop: "50px" }}
                >
                  <div className="btn-yourname ">
                    {/* this is input */}
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter otp"
                      name="otp"
                      required
                      onBlur={handleOnChange}
                    />
                    <i class="fas fa-angle-right"></i>
                  </div>
                  {/* This is the button */}
                  <div
                    className="btn-yourname "
                    onClick={() => displayRazorpay({})}
                  >
                    <button className="yourname">Verify</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
      <Payment open1={open1} openModal={handleOpen} closeModal={handleClose} />
    </div>
  );
};

export default LoginModal;
