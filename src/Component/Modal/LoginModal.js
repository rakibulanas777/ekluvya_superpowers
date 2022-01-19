import React, {lazy,Suspense, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import "./LoginModal.css";
import Payment from "./Payment";
import { displayRazorpay } from "./razorpay";
import firebase from "../../firebase";

import {
  updateProfile,
  verifyOtpData,
  verifyOtpBeforeSend,
  leadsApi,
} from "../../api_call";
import { countryCode } from "../../requests";
import { ScaleLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

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

const LoginModal = ({ openbtn, closebtn, open = false, courseDetails }) => {
  let captchaRef = React.useRef(null);
  const [customConfirmation, setCustomConfirmation] = useState(null);
  const [open1, setOpen] = React.useState(false);
  const [registerData, setRegisterData] = useState({});
  const [loading, setLoading] = useState(false);
  const [leadCall, setLeadCall] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLeadApiCall = () => {
    if (!leadCall) {
      leadsApi({
        firstName: registerData?.firstname,
        lastName: registerData?.lastname,
        phoneNumbers: [
          {
            type: "MOBILE",
            code: "IN",
            value: registerData["phone"],
            dialCode: countryCode,
            primary: true,
          },
        ],
        emails: [
          { type: "OFFICE", value: registerData["email"], primary: true },
        ],
      });
    }
    setLeadCall(true);
  };

  const sendOtp = (e) => {
    e.preventDefault();
    handleLeadApiCall();
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        // captchaRef.current,
        {
          size: "invisible",
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            handleSignUp();
            setLoading(true);
          },
          "expired-callback": function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            toast.error("re-captcha expired refresh page" || "Try again", {
              position: "top-center",
            });
          },
        }
      );
    }
    handleSignUp();
  };

  const handleSignUp = () => {
    const appVerifier = window.recaptchaVerifier;
    let phoneNumber = `${countryCode}${registerData["phone"]}`;

    setLoading(true);
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setCustomConfirmation(confirmationResult);
        toast.success("OTP sent successfully", {
          position: "top-center",
          duration: 4000,
          iconTheme: {
            success: "#fc6113",
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.code !== "auth/captcha-check-failed") {
          setCustomConfirmation(null);
          let message = error.message || "Try again";
          if (error.code === "auth/invalid-phone-number") {
            message = "Invalid phone number " + error.message;
          }
          toast.error(message, {
            position: "top-center",
          });
        }
      })
      .finally(() => setLoading(false));
  };

  const getToken = async ({ code = "123456", phoneNo = "9717808550" }) => {
    const userData = await verifyOtpData({
      countryCode,
      otp: code,
      phoneNo,
    });
    const token = userData?.data?.token;
    if (token) {
      const userId = userData.data._id;
      const name =
        (registerData?.firstname || "") + " " + (registerData?.lastname || "");
      const email = registerData?.email;
      const phoneNumber = registerData?.phone;
      await updateProfile(token, {
        name,
        email,
        phoneNumber: phoneNumber,
      });
      toast.success("OTP verify successfully", {
        position: "top-center",
        duration: 4000,
        iconTheme: {
          success: "#fc6113",
        },
      });
      localStorage.setItem(
        "access-token",
        JSON.stringify({ token, id: userId, name, email, phoneNumber })
      );
      closebtn();
      console.log({ courseDetails });
      displayRazorpay({
        user_id: userId,
        phone_number: phoneNumber,
        email,
        course_id: courseDetails?.course_id,
        course_amount: courseDetails?.discount || courseDetails?.amount || 100,
        accessToken: token,
        subject_id: courseDetails?._id,
      });
    } else {
      toast.error("user info not getting please try again ", {
        position: "top-center",
      });
    }
    setLoading(false);
  };

  const onVerifyCodeSubmit = (e) => {
    e.preventDefault();
    const code = registerData["otp"];
    setLoading(true);
    window.confirmationResult
      .confirm(code)
      .then(async function (result) {
        // now it's static
        const verifyDataOtp = await verifyOtpBeforeSend({
          countryCode,
          otp: "1234" || code,
          phoneNo: registerData["phone"],
        });
        if (verifyDataOtp.status === 200) {
          await getToken({ code: "1234", phoneNo: registerData["phone"] });
        }
        // User signed in successfully.
        // var user = result.user;
        // user.getIdToken().then((idToken) => {
        // });
      })
      .catch(function (error) {
        // User couldn't sign in (bad verification code?)
        console.error("Error while checking the verification code", error);
        toast.error(error.message || "Try again", {
          position: "top-center",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  useEffect(() => {
    setLeadCall(false);
  }, [open]);
  return (
    <div className="container">
      <Suspense fallback={<div>Loading ... </div>}>
        <Modal
          open={open}
          onClose={() => {
            closebtn();
            setCustomConfirmation(null);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="mb-5">
            <div
              className="cross-icon mb-5"
              onClick={() => {
                closebtn();
                setCustomConfirmation(null);
              }}
            >
              <i class="fas fa-times"></i>
            </div>
            <Toaster />
            {/* from  */}
            <form
              className="mt-5 mb-5"
              onSubmit={sendOtp}
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   getToken({});
              // }}
            >
              <div className="container">
                {!customConfirmation && (
                  <>
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
                        type="number"
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
                    <div className="btn-width text-center get-otp">
                      <button
                        type="submit"
                        className="btn text-center btn-primary"
                      >
                        <ScaleLoader
                          color="#fff"
                          loading={loading}
                          size={150}
                        />
                        {!loading && "Get OTP"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </form>
            <form className="mt-5 mb-5" onSubmit={onVerifyCodeSubmit}>
              <div className="container">
                {customConfirmation && (
                  <div className="row align-items-center">
                    <div className="form-group col-md-9">
                      <label for="inputotp">Enter OTP</label>
                      <input
                        type="number"
                        name="otp"
                        className="form-control from-input text-white"
                        id="inputotp"
                        placeholder="Verify Otp"
                        required
                        onBlur={handleOnChange}
                      />
                    </div>
                    <div className="col-md-3 mx-auto verify mt-3">
                      <button
                        type="submit"
                        disabled={registerData["otp"]?.length < 6}
                        className="btn w-100 text-center  btn-primary"
                      >
                        <ScaleLoader
                          color="#fff"
                          loading={loading}
                          size={150}
                        />
                        {!loading && "Verify"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </Box>
        </Modal>
        <Payment
          open1={open1}
          openModal={handleOpen}
          closeModal={handleClose}
        />
      </Suspense>
    </div>
  );
};

export default LoginModal;
