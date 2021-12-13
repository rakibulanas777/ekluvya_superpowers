import axios from "axios";
import logo from "../../image/logo.svg";
const REACT_APP_RAZORPAY_KEY_SECREAT = "rzp_test_mokjb7NhVk13K5";
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
  course_id = "123",
  class_id = "234",
  board_id="345",
  user_id="1",
  name="",
  email="",
  phone_number="",
}) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  // creating a new order
  const result = await axios.post("https://ekluvya.loca.lt/payment/orders");

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

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
      console.log({ response });
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await axios.post(
        "https://ekluvya.loca.lt/payment/success",
        data
      );

      alert(result.data.msg);
    },
    prefill: {
      name: name || "AK",
      email: email || "amitkadivar.ce@gmail.com",
      contact: phone_number|| "9999999999",
    },
    notes: {
      address: "ak",
      user_id: user_id, // make a dynamic
      boardId: board_id, // make a dynamic
      classId: class_id, // make a dynamic
      courseId: course_id, // make a dynamic
    },
    theme: {
      color: "#FF7000",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
