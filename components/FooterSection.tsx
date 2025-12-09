import React from "react";
import { TextField, Button, Avatar } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="bg-[#161C28] md:px-20 px-4 text-white pt-20 pb-10">
      <div className=" mx-auto   grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Left: Testimonials */}
        <div className="space-y-8">
          <h2 className="text-[20px] md:text-[50px] font-semibold leading-[100%] ">
            People are Saying <br /> About DoWhith
          </h2>
          <p className="text-[#A6A6A6] text-[12px] md:text-[18px] ">
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>
          <div className="py-3">
            <Image
              src="/Group 212.png"
              className="w-8 mb-4 opacity-50"
              alt='"'
              width={100}
              height={100}
            />
            <p className="text-[#A6A6A6] text-[12px] md:text-[18px] mb-4">
              "I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful."
            </p>
            <p className="text-[#A6A6A6] text-[12px] md:text-[18px] font-bold">
              _ Aria Zinanrio
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex pt-3 gap-3">
              <Image
                src="/Ellipse 57.png"
                className="w-8 mb-4 "
                alt='"'
                width={70}
                height={70}
              />
              <Image
                src="/Ellipse 56.png"
                className="w-8 mb-4 "
                alt='"'
                width={70}
                height={70}
              />
              <Image
                src="/Ellipse 55.png"
                className="w-8 mb-4 "
                alt='"'
                width={70}
                height={70}
              />
              <Image
                src="/Ellipse 54.png"
                className="w-8 mb-4 "
                alt='"'
                width={70}
                height={70}
              />
            </div>
            <div className="border border-white rounded-full p-2 hover:bg-white cursor-pointer">
              <PlayCircleOutlineIcon />
            </div>
          </div>
        </div>

        {/* Right: Get Started Form */}
        <div className="bg-[#222932] p-8 rounded-3xl flex flex-col justify-center items-center text-center">
          <div className="mb-1 text-[ffffff]">
            {/* Icon placeholder */}
            <Image
              src="/Group (1).png"
              className=" mb-4"
              alt='"'
              width={70}
              height={70}
            />
          </div>
          <h3 className="text-2xl font-bold mb-6">Get Started</h3>

          <div className="space-y-4 w-full">
            <div className="text-left">
              <label className="text-xs text-white font-bold ml-1">Email</label>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  input: {
                    color: "#A6A6A6",
                    bgcolor: "#ffffff",
                    borderRadius: 2,
                  },
                  fieldset: { border: "none" },
                }}
              />
            </div>
            <div className="text-left">
              <label className="text-xs text-white font-bold ml-1">
                Message
              </label>
              <TextField
                fullWidth
                placeholder="What are you say?"
                multiline
                rows={2}
                variant="outlined"
                sx={{
                  input: { color: "white" },
                  textarea: { color: "#A6A6A6" },
                  bgcolor: "#ffffff",
                  borderRadius: 2,
                  fieldset: { border: "none" },
                }}
              />
            </div>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#54BD95",
                py: 1.5,
                textTransform: "none",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Request Demo
            </Button>
          </div>
          <p className="text-xs text-right w-full text-gray-500 mt-2">
            or <span className="text-white">Start Free Trial</span>
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-800 pt-10">
        <div className="col-span-2">
          <h3 className="text-[#54BD95] text-3xl font-bold mb-4">Biccas</h3>
          <p className="text-gray-500 text-sm">
            Get started noew try our product
          </p>
          <div className="mt-4 relative max-w-xs">
            <input
              type="email"
              placeholder="Enter your email here"
              className="bg-transparent border border-white rounded-full py-2 px-4 w-full text-sm text-white"
            />
            <div className="absolute right-1 top-1 bg-[#54BD95] p-1.5 rounded-full cursor-pointer">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {[
          {
            title: "Support",
            links: [
              "Help centre",
              "Account information",
              "About",
              "Contact us",
            ],
          },
          {
            title: "Help and Solution",
            links: [
              "Talk to support",
              "Support docs",
              "System status",
              "Covid responde",
            ],
          },
          {
            title: "Product",
            links: ["Update", "Security", "Beta test", "Pricing product"],
          },
        ].map((col, idx) => (
          <div key={idx}>
            <h4 className="font-bold mb-4">{col.title}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between text-xs text-white gap-4">
        <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
        <div className="space-x-4">
          <a href="#">Terms and Condtions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
