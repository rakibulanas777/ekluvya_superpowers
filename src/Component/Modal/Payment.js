import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Payment.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "33%",
  bgcolor: "background.paper",

  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};
const Payment = ({ open1, openModal, closeModal }) => {
  return (
    <div>
      <Modal
        open={open1}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="title-payment mb-4 d-flex justify-content-between align-items-center">
            <div className="payment-title">Choose Payment Method</div>
            <div className="payment-icon" onClick={closeModal}>
              <i class="fas fa-times"></i>
            </div>
          </div>
          {/* payment box  */}
          <div className="payment-box">
            <div className="payment-box-flex mb-2 d-flex justify-content-between align-items-center">
              <div className="original-price">Original Course Price :</div>
              <div className="original-price-title">₹ 1999</div>
            </div>
            <div className="payment-box-flex bottom  mb-2 d-flex justify-content-between align-items-center">
              <div className="original-price">Discount Applied :</div>
              <div className="original-price-title mb-3">₹ 900</div>
            </div>
            <div className="payment-box-flex  mb-2 d-flex justify-content-between align-items-center">
              <div className="amount-price">Amount to be paid :</div>
              <div className="amount-price-title mb-3">₹ 1099</div>
            </div>
          </div>

          {/* coupon */}
          <div className="payment-box mb-4 mt-4 d-flex justify-content-between align-items-center">
            <div className="coupon-title">
              <i class="fas fa-user-tag"></i>{" "}
              <span className="coupon-text ms-2">APPLY COUPON</span>
            </div>
            <div className="coupon-icon">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          {/* Upi apps  */}
        </Box>
      </Modal>
    </div>
  );
};

export default Payment;
