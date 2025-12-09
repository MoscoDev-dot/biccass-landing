"use client";

import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Pricing = () => {
 

  return (
    <section className="py-20 text-center bg-gradient-to-r from-white to-[#54BE96]/10   md:px-20 px-4 ">
      <div>
        <h2 className="text-[20px] md:text-[50px] font-bold text-[#191A15] mb-4">
          Choose Plan <br /> That's Right For You
        </h2>
        <p className="text-[#A6A6A6] text-[12px] md:text-[18px] leading-[100%] mb-8">
          Choose plan that works best for you, feel free to contact us
        </p>
      </div>
      <div className="flex justify-center mb-10 md:mb-15 w-fit mx-auto p-2 bg-white gap-3 items-center border border-0 shadow-lg rounded-[2vh] ">
        <p className="px-2 py-2 text-[#191A15] font-medium text-[12px] md:text-[18px] leading-[30px] ">
          Bill Monthly
        </p>
        <p className="border px-6 py-2 text-[#FFFFFF] bg-[#54BD95] rounded-lg font-medium text-[12px] leading-[30px] md:text-[18px]">
          Bill Yearly
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Free Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold mb-2">Free</h3>
          <p className="text-gray-400 text-sm mb-6">
            Have a go and test your superpowers
          </p>
          <div className="text-4xl font-bold mb-8 text-brand-dark flex justify-center items-start">
            <span className="text-sm mt-2">$</span>0
          </div>

          <div className="bg-[#F9FAFB] p-6 rounded-xl mb-6 space-y-4 text-left">
            {[
              "2 Users",
              "2 Files",
              "Public Share & Comments",
              "Chat Support",
              "New income apps",
            ].map((feat) => (
              <div key={feat} className="flex gap-2 text-sm text-gray-600">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-[#54BD95]"
                />{" "}
                {feat}
              </div>
            ))}

             <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "#54BD95",
              boxShadow: "none",
              borderRadius: "50px",
              fontWeight: "semibold",
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Signup for free
          </Button>
          </div>
         
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="bg-[#54BD95] p-8 rounded-2xl shadow-xl transform scale-105 relative z-10 text-white">
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-green-100 text-sm mb-6">
            Experiment the power of infinite possibilities
          </p>
          
          <div className="text-4xl font-bold  text-white flex justify-center items-start">
            <span className="text-sm mt-2">$</span>8 
          </div>
          <div className="flex justify-center md:mb-8 w-fit mx-auto px-2 py-1 bg-[#85DAB9] items-center border border-0 shadow-lg rounded-lg ">
              Save $50 a year
            
          </div>

          <div className="bg-white p-6 rounded-xl mb-6 space-y-4 text-left">
            {[
              "4 Users",
              "All apps",
              "Unlimited editable exports",
              "Folders and collaboration",
              "All incoming apps",
            ].map((feat) => (
              <div key={feat} className="flex gap-2 text-sm text-gray-800">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-[#54BD95]"
                />{" "}
                {feat}
              </div>
            ))}

            <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#54BD95",
              color: "white",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              fontWeight: "bold",
              borderRadius: "50px",
            }}
          >
            Go to Pro
          </Button>
          </div>
          
        </div>

        {/* Business Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold mb-2">Business</h3>
          <p className="text-gray-400 text-sm mb-6">
            Unveil new superpowers and join the Design League
          </p>
          <div className="text-4xl font-bold mb-8 text-brand-dark flex justify-center items-start">
            <span className="text-sm mt-2">$</span>16
          </div>

          <div className="bg-brand-light p-6 rounded-xl mb-6 space-y-4 text-left">
            {[
              "All the features of pro plan",
              "Account success Manager",
              "Single Sign-On (SSO)",
              "Co-conception pogram",
              "Collaboration-Soon",
            ].map((feat) => (
              <div key={feat} className="flex gap-2 text-sm text-gray-600">
                <CheckCircleOutlineIcon
                  fontSize="small"
                  className="text-[#54BD95]"
                />{" "}
                {feat}
              </div>
            ))}

            <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "#54BD95",
              boxShadow: "none",
               borderRadius: "50px",
              fontWeight: "semibold",
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Goto Business
          </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Pricing;
