import axios from "axios";
import { getBoard, getClass } from "../../api_call";
import logo from "../../image/logo.svg";
import { url, orderIdGenerate, razorpay_api_key_id } from "../../requests";
let token = localStorage.getItem("access-token");
if (token) {
  token = JSON.parse(token);
  token = token.token;
}
const REACT_APP_RAZORPAY_KEY_SECREAT = razorpay_api_key_id;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function displayRazorpay({
  course_name = "Course",
  course_id,
  subject_id,
  user_id = "1",
  name = "",
  email = "",
  phone_number = "",
  course_amount = 1,
  accessToken = token,
}) {
  console.log({course_id,subject_id})
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  // creating a new order
  const result = await axios.post(`${url}${orderIdGenerate}`, {
    amount: course_amount * 100,
  });
  // course_amount;

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;
  const board_id = await getBoard(accessToken);
  const class_id = await getClass(accessToken);

  const options = {
    key: REACT_APP_RAZORPAY_KEY_SECREAT, // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Ekluvya",
    description: course_name, // course name
    image: { logo },
    order_id: order_id,
    isNonAcademicCourse: true,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      // const result = await axios.post(
      //   "https://ekluvya.loca.lt/payment/success",
      //   data
      // );
      alert(
        `Payment Successful. You will get the access of course shortly. your payment id is #${response.razorpay_payment_id}`
      );
      window.location.href = "/";
    },
    prefill: {
      name: name,
      email: email,
      contact: phone_number,
    },
    notes: {
      user_id: user_id, // make a dynamic
      boardId: board_id, // make a dynamic
      classId: class_id, // make a dynamic
      courseId: course_id, // make a dynamic
      subjectId: subject_id, // make a dynamic
    },
    theme: {
      color: "#FF7000",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
