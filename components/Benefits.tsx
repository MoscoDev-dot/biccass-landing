import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import { FadeIn } from "./Animations";

const Benefits = () => {
  return (
    <section className="py-20  mx-auto bg-gradient-to-r from-[#FFD6D6]/30 to-[#54BE96]/10 md:px-20 px-4  grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <FadeIn direction="right" duration={0.8} className="space-y-8">
        <h2 className="text-[20px] md:text-[50px] font-bold text-brand-dark">
          What Benefit Will You Get
        </h2>

        <ul className="space-y-6">
          {[
            "Free Consulting With Experet of Saving Money",
            "Online Banking",
            "Investment Report Every Month",
            "Saving Money For The Future",
            "Online Transaction",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4">
              <CheckCircleIcon sx={{ color: "#54BD95" }} />
              <span className="font-medium text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
      {/* image side */}
      <FadeIn direction="left" duration={0.8} delay={0.2} className="relative">
        {/* Placeholder for the guy with green bg */}
        <div className="bg-brand-DEFAULT/10 rounded-tr-[100px] rounded-bl-[50px] p-4 relative z-0 min-h-[400px] flex items-center justify-center">
          <div className="absolute md:top-20 top-40 -right-5 bg-white md:p-4 p-2 rounded-xl shadow-lg z-10 flex items-center gap-3">
            <div className="flex gap-3">
              <div>
                <p className="text-xs text-gray-400">Total Income</p>
                <p className="font-bold md:text-lg text-xs">$245.00</p>
              </div>
              <div className="">
                <Image
                  src="/bar-chart-2 1.png"
                  alt="Quote"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          {/* main image */}
          <Image
            width={400}
            height={400}
            src="/Rectangle 48.png"
            alt="Dashboard User"
            className="relative z-0 rounded-xl shadow-2xl max-w-xs md:max-w-md"
          />
          {/* 1st incomee */}
          <div className="absolute top-10 md:-left-10 bg-white md:p-4 p-2 rounded-xl shadow-lg z-10 flex items-center gap-3">
            <div className="flex gap-2 md:gap-4">
              <div>
                <Image
                  src="/Ellipse 33.png"
                  alt="Quote"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="text-xs text-[#191D23] font-bold ">
                  Amanda young
                </p>
                <p className=" text-xs text-[#A1A1A1] ">Expert saving money</p>
              </div>
              <div className="">
                <Image
                  src="/Group 109.png"
                  alt="Quote"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* next one */}

          <div className="absolute top-70 md:me-120 z-10 flex items-center">
            <Image src="/Group 113.png" alt="Quote" width={50} height={50} />
          </div>

          {/* bottom income */}
          <div className="absolute md:bottom-0 bottom-10 md:-left-5 bg-white md:p-4 p-2 rounded-xl shadow-lg z-10 flex items-center gap-3">
            <div className="flex md:gap-3 gap-2">
              <div>
                <Image src="/Circle 1.png" alt="Quote" width={20} height={20} />
              </div>
              <div className="">
                <p className="text-xs text-[#191D23] font-bold">
                  Money tranfered successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Benefits;
