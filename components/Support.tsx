import React from "react";
import { Rating } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PeopleIcon from "@mui/icons-material/People";
import Image from "next/image";
import { FadeIn } from "./Animations";

const Support = () => {
  return (
    <section className="py-20 bg-[#F9F8FE]">
      <div className=" mx-auto md:px-20 px-4  grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <FadeIn direction="right" duration={0.8} className="space-y-6">
          <h2 className="text-[20px] md:text-[50px] font-semibold text-[#191A15] leading-snug">
            How we support our partner all over the world
          </h2>
          <p className="text-[#A6A6A6] font-medium md:text-[16px] text-[12px] ">
            SaaS become a common delivery model for many business application,
            including office software, messaging software, payroll processing
            software, DBMS software, management software.
          </p>

          <div className="flex gap-12 pt-8">
            <div>
              <Rating value={5} readOnly />
              <p className="font-bold text-lg mt-1">4.9 / 5 rating</p>
              <p className="text-[#A6A6A6] text-sm">databricks</p>
            </div>
            <div>
              <Rating value={4} readOnly />
              <p className="font-bold text-lg mt-1">4.8 / 5 rating</p>
              <p className="text-[#A6A6A6] text-sm">chainalysis</p>
            </div>
          </div>
        </FadeIn>

        {/* Right Side List */}
        <div className="space-y-8">
          {[
            {
              icon: "/activity 1.png",
              title: "Publishing",
              desc: "Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand.",
            },
            {
              icon: "/pie-chart 1.png",
              title: "Analytics",
              desc: "Analyze your performance and create gorgeous report.",
            },
            {
              icon: "/command 1.png",
              title: "Engagement",
              desc: "Quickly navigate you and engage with your audience.",
            },
          ].map((item, idx) => (
            <FadeIn key={idx} direction="left" delay={idx * 0.2} duration={0.6}>
              <div className="flex gap-4">
                <div className="bg-white p-3 h-12 w-12 flex items-center justify-center rounded shadow-sm text-brand-DEFAULT">
                  <Image src={item.icon} alt="Icon" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[18px] md:text-[28px] text-[#191A15] ">
                    {item.title}
                  </h4>
                  <p className="text-[#A6A6A6] text-[12px] md:text-[18px] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
