


import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  const [seconds, setSeconds] = useState(30); // Timer for 30 seconds
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsResendEnabled(true); // Enable the resend button after timer expires
          return 0; // Set to 0
        }
        return prev - 1; // Decrease timer
      });
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Verify Your OTP
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          You have received the OTP in your email
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <input
            type="text"
            className="h-16 w-2/3 ms-14 object-cover rounded-xl group-hover/card:shadow-xl"
            placeholder="              Enter your OTP Here"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            onClick={() => {
              // Handle resend OTP logic here
              console.log("Resending OTP...");
            }}
            className={`px-4 py-2 rounded-xl text-xs font-normal dark:text-white ${isResendEnabled ? "" : "opacity-50 cursor-not-allowed"}`}
            disabled={!isResendEnabled}
          >
            {isResendEnabled ? "Resend OTP" : `Resend OTP in ${seconds}s`}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Submit
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

