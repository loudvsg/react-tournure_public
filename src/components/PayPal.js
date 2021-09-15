import React, { useRef, useEffect } from "react";

export default function PayPal({number}) {

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking tabe",
                amount: {
                  currency: "EUR",
                  value: number,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);

          console.log("data", data)
          console.log("actions", actions)

        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div className="justified" >
      <div ref={paypal}></div>
    </div>
  );
}