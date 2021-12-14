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
  width: "70%",
  hight: "84%",
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
          <div className="cross-icon mb-5" onClick={closebtn}>
            <i class="fas fa-times"></i>
          </div>

          {/* from  */}
          <form className="mt-5 mb-5" onSubmit={handleClick}>
            <div className="container">
              <div className="row from">
                <div className="form-group form-white col-md-6">
                  <label for="inputFirstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    required
                    onBlur={handleOnChange}
                    className="form-control from-input text-white"
                    id="inputFirstname"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group  col-md-6">
                  <label for="inputLastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control from-input text-white"
                    id="inputLastname"
                    placeholder="Last name"
                    required
                    onBlur={handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputPhone">Phone</label>
                <input
                  type="text"
                  className="form-control from-input text-white"
                  id="inputPhone"
                  name="phone"
                  placeholder="Phone number"
                  required
                  onBlur={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label for="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control from-input text-white"
                  id="inputEmail"
                  name="email"
                  placeholder="Email address"
                  required
                  onBlur={handleOnChange}
                />
              </div>
              <div className="btn-width text-center mx-auto">
                <button type="submit" className="btn text-center btn-primary">
                  Get OTP
                </button>
              </div>

              <div className="row align-items-center">
                <div className="form-group col-md-9">
                  <label for="inputotp">Enter OTP</label>
                  <input
                    type="text"
                    name="otp"
                    className="form-control from-input text-white"
                    id="inputotp"
                    placeholder="Enter OTP"
                    required
                    onBlur={handleOnChange}
                  />
                </div>
                <div className="col-md-3 mx-auto verify mt-3">
                  <button
                    type="submit"
                    className="btn w-100 text-center  btn-primary"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
      <Payment open1={open1} openModal={handleOpen} closeModal={handleClose} />
    </div>
  );
};

export default LoginModal;
