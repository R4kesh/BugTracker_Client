
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function ThreeDCardDemo() {
  const [seconds, setSeconds] = useState(30); 
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | null>(null); 
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsResendEnabled(true); // Enable the resend button after timer expires
          return 0; // Set to 0
        }
        return prev - 1;
      });
    }, 1000); 

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const handleOtpSubmit = async () => {
    try {
      const email= localStorage.getItem('email');

      
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/verify-otp`, { otp,email });
      console.log('res',response);
      
      console.log('OTP Verification Response:', response.data);
      setSuccess('OTP verified successfully!'); // Set success message
      setTimeout(() => {
        navigate('/login'); 
      }, 1000);
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message); // Set error message from server
      } else {
        setError('Something went wrong, please try again');
      }
    }
  };

  const handleResendOtp = async () => {
    try {
      const email = localStorage.getItem('email'); 

      
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/resend-otp`, { email });
      console.log('OTP Resent:', response.data);
      
     
      setSeconds(30); // Reset the countdown timer
      setIsResendEnabled(false); // Disable the resend button until timer runs out

      
      setSuccess('OTP resent successfully!');
      setError("")

    } catch (error: any) {
      console.error('Error resending OTP:', error);
      setError('Failed to resend OTP. Please try again.');
    }
  };

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
            type="number"
            value={otp} 
            onChange={(e) => setOtp(e.target.value)}
            className="h-16 w-2/3 ms-14 object-cover rounded-xl group-hover/card:shadow-xl"
            placeholder="              Enter your OTP Here"
          />
        </CardItem>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        {success && <p className="text-green-500">{success}</p>} {/* Display success message */}
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            onClick={handleResendOtp}
            className={`px-4 py-2 rounded-xl text-xs font-normal text-black ${isResendEnabled ? "" : "opacity-50 cursor-not-allowed"}`}
            disabled={!isResendEnabled}
          >
            {isResendEnabled ? "Resend OTP" : `Resend OTP in ${seconds}s`}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={handleOtpSubmit}
          >
            Submit
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

