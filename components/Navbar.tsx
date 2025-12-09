"use client";

import React, { useState } from "react";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  // For dropdown menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Blog", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <nav className="relative flex justify-between items-center py-6 md:px-20 px-4 mx-auto">
      <Link
        href="/"
        className="text-[#54BD95] text-[20px] md:text-[50px] font-semibold"
      >
        Biccas
      </Link>

      <div className="hidden md:flex space-x-8 md:text-[16px] text-[12px] font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setActiveLink(link.name)}
            className={`${
              activeLink === link.name ? "text-black" : "text-[#A6A6A6]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}
              startIcon={
                <Avatar src={user.avatar} sx={{ width: 30, height: 30 }} />
              }
            >
              {user.name}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  router.push("/profile");
                }}
              >
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button
                variant="text"
                sx={{ color: "#A6A6A6", textTransform: "none" }}
              >
                Login
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#54BD95",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#409875" },
                }}
              >
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4 md:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setIsMenuOpen(false);
              }}
              className="text-gray-600 hover:text-green-500 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 mt-4">
            {user ? (
              <>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  {user.avatar && <Avatar src={user.avatar} />}
                  <span className="font-bold">{user.name}</span>
                </div>
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/profile");
                  }}
                  variant="text"
                >
                  Profile
                </Button>
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    logout();
                  }}
                  variant="outlined"
                  color="error"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    fullWidth
                    variant="text"
                    sx={{ color: "#A6A6A6", textTransform: "none" }}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    fullWidth
                    variant="contained"
                    disableElevation
                    sx={{
                      bgcolor: "#54BD95",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#409875" },
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
