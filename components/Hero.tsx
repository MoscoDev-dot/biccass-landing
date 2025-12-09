import React from "react";
import { Button, TextField, InputAdornment } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Image from "next/image";
import { FadeIn } from "./Animations";

const Hero = () => {
  return (
    <section className="pt-10 pb-20 md:px-20 px-4   mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Text */}
      <FadeIn
        direction="right"
        duration={0.8}
        delay={0.2}
        className="space-y-6"
      >
        <h1 className="text-[25px] md:text-[50px] font-bold leading-tight text-brand-dark">
          We're here to Increase your
          <span className="">
            Productivity
            <Image
              src="/Vector 32.png"
              alt="Quote"
              className="mt-5"
              width={420}
              height={20}
            />
          </span>
        </h1>

        <p className="text-[12px] md:text-[18px] text-[#A6A6A6] max-w-md pt-4">
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest features in managing work every day.
        </p>

        <div className="flex items-center space-x-4 pt-4">
          <Button
            variant="contained"
            size="large"
            disableElevation
            sx={{
              bgcolor: "#54BD95",
              borderRadius: "30px",
              padding: "12px 30px",
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": { bgcolor: "#409875" },
            }}
          >
            Try Free Trial
          </Button>

          <Button
            startIcon={<PlayCircleOutlineIcon />}
            sx={{ color: "#191D23", textTransform: "none", fontSize: "1rem" }}
          >
            View Demo
          </Button>
        </div>
      </FadeIn>

      {/* Right Image Placeholder */}
      <FadeIn direction="left" duration={0.8} delay={0.4} className="relative">
        {/* Placeholder for the guy with green bg */}
        <div className="bg-brand-DEFAULT/10 rounded-tr-[100px] rounded-bl-[50px] p-4 relative z-0 min-h-[400px] flex items-center justify-center">
          <div className="absolute top-10 md:right-17 right-0   z-10">
            <Image src="/Group 59.png" alt="Quote" width={50} height={50} />
          </div>
          {/* man image */}
          <Image
            width={350}
            height={350}
            src="/Frame 46.png"
            alt="Dashboard User"
            className="relative z-0 rounded-xl shadow-2xl w-[300px] md:w-[400px] md:max-w-md"
          />
          {/* 1st incomee */}
          <div className="absolute top-10 md:left-0  bg-white md:p-4 p-2 rounded-xl shadow-lg z-10 flex items-center gap-3">
            <div className="flex gap-3 md:gap-8">
              <div>
                <p className="text-xs text-gray-400">Enter Amount</p>
                <p className="font-bold md:text-lg text-xs">$450.00</p>
              </div>
              <div className="bg-[#52BD94] p-2 md:text-lg text-xs rounded-[2vh] text-white ">
                send
              </div>
            </div>
          </div>
          {/* bottom income */}
          <div className="absolute bottom-10 md:-left-5 left-0  bg-white md:p-4 p-2 rounded-xl shadow-lg z-10 flex items-center gap-3">
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
          {/* debitcard */}
          <div className="absolute bottom-10 -right-0  z-10 ">
            <Image
              src="/Frame 45.png"
              alt="Quote"
              width={150}
              height={200}
              className="w-[100px] md:w-[200px] "
            />
          </div>
          {/* last redishpink image */}
          <div className="absolute bottom-0 md:ms-70  z-10 ">
            <Image src="/Group 48.png" alt="Quote" width={50} height={50} />
          </div>
        </div>
      </FadeIn>

      {/* Partners Logos */}
      <div className="col-span-1 lg:col-span-2 mt-16">
        <h3 className="text-center text-2xl font-bold mb-8 text-brand-dark">
          More than 25,000 teams use Collabs
        </h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:grayscale-0">
          {[
            { name: "Unsplash", logo: "/Group 140.png" },
            { name: "Notion", logo: "/Union.png" },
            { name: "INTERCOM", logo: "/Group 143.png" },
            { name: "descript", logo: "/Union.png" },
            { name: "grammarly", logo: "/Group 143.png" },
          ].map((partner, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={30}
                height={30}
                className="object-contain"
              />
              <span className="text-xl font-bold font-sans">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
