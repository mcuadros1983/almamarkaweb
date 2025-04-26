"use client";

import { useEffect } from "react";

export default function BookingEngine() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://frame2.hotelpms.io/BookingFrameClient/public/assets/booking-frame/js/iframe-resizer.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://frame2.hotelpms.io/BookingFrameClient/public/assets/booking-frame/js/main.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="booking-engine my-10">
      <iframe
        id="hw-booking-frame"
        src="https://frame2.hotelpms.io/BookingFrameClient/hotel/22188458010DB1BA7B3735DEFABB1AB3/78cee572-7606-4029-bc3b-e056427711e7/book/rooms?currency=ARS&language=en-US&rp="
        frameBorder="0"
        allowtransparency="true"
        scrolling="no"
        style={{ width: "100%", minHeight: "800px" }}
      ></iframe>
    </div>
  );
}
