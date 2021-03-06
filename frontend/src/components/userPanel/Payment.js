import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import { ispaysubmitGet } from "../../store/actions/isPaySubmitAction";
import alertAction from "../../store/actions/alertAction";

const Payment = () => {
  const amount = 300;
  const dispatch = useDispatch();
  const userReducer = useSelector((store) => store.userReducer);
  const loadRazorpay = () => {
    axios
      .post("/payment/createorder", { amount: amount + "00" })
      .then((res) => {
        const { amount, id: order_id, currency } = res.data;
        axios
          .get("/payment/get")
          .then((rezkey) => {
            const options = {
              key: rezkey,
              amount: amount.toString(),
              currency: currency,
              name: "Register for the contest",
              description: "You can submit article 3 times by paying one time",
              order_id: order_id,

              handler: function (response) {
                axios
                  .post("/payment/payorder", {
                    amount: amount,
                    paymentId: response.razorpay_payment_id,
                    orderId: response.razorpay_order_id,
                    signature: response.razorpay_signature,
                  })
                  .then((response) => {
                    dispatch(ispaysubmitGet());
                    dispatch(alertAction(response.data.message));
                  })
                  .catch((err) => {
                    dispatch(alertAction(err.response.data.message));
                  });
              },
              prefill: {
                name: userReducer.user.name,
                email: userReducer.user.email,
                contact: userReducer.user.phone,
              },
              notes: {
                address: userReducer.user.country,
              },
              theme: {
                color: "#80c0f0",
              },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          })
          .catch((err) => {
            dispatch(alertAction(err.response.data.message));
          });
      })
      .catch((err) => {
        dispatch(alertAction(err.response.data.message));
      });
  };

  return (
    <button
      onClick={loadRazorpay}
      type="button"
      className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
    >
      PAYMENT
    </button>
  );
};

export default Payment;
