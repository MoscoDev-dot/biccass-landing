import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

const Features = () => {
  return (
    <section className="py-20  mx-auto bg-gradient-to-l from-white to-[#FFD6D6]/15 md:px-20 px-4 ">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-8">
        <h2 className="text-[20px] md:text-[50px] leading-[100%] font-semibold text-[#191A15] max-w-sm">
          Our Features you can get <br />
           <p className="text-[#A6A6A6] mt-5 text-[12px] md:text-[18px] leading-[30px] max-w-md md:hidden">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your projrct esaly{" "}
        </p>
        </h2>
        <p className="text-[#A6A6A6] text-[12px] md:text-[18px] leading-[30px] max-w-md hidden md:block">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your projrct esaly{" "}
        </p>
        <Button
          variant="contained"
          disableElevation
          sx={{
            bgcolor: "#54BD95",
            borderRadius: "50px",
            padding: "18px 30px",
            textTransform: "none",
            "&:hover": { bgcolor: "#409875" },
          }}
        >
          Get Started
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Collaboration Teams",
            img: "/Frame 247.png",
            desc: "Here you can handle projects together with team virtually.",
          },
          {
            title: "Cloud Storage",
            img: "/Frame 53.png",
            desc: "No need to worry about storage because we provide storage up to 2 TB.",
          },
          {
            title: "Daily Analytics",
            img: "/Frame 54.png",
            desc: "We always provide useful information to make it easier for you every day.",
          },
        ].map((feature, idx) => (
          <div key={idx} className="  ">
            <div className="rounded-xl overflow-hidden mb-6  flex items-center justify-center">
              {/* Replace with actual image assets from screenshots */}
              <Image
                src={feature.img}
                alt={feature.title}
                className="object-cover"
                width={364}
                height={430}
              />
            </div>
            <div className="md:ms-10 ms-0">
              <h3 className="text-[15px] text-[#191A15] md:text-[30px] leading-[30px] font-semibold text-brand-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-[#A6A6A6] font-medium  text-[12px] md:text-[18px] leading-[30px]">
                {feature.desc}
              </p>
            </div>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
