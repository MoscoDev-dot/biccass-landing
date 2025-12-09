"use client";

import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { Button, Avatar, CircularProgress } from "@mui/material";
import Link from "next/link";

const ProfilePage = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <CircularProgress sx={{ color: "#54BD95" }} />
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-[#54BD95] font-semibold mb-1">
              User Profile
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              Welcome back, {user.name}
            </h1>

            <div className="mt-6 flex items-center justify-center md:justify-start">
              {user.avatar && (
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  sx={{ width: 100, height: 100 }}
                />
              )}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold capitalize">{user.role}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Button
                onClick={logout}
                variant="outlined"
                color="error"
                fullWidth
              >
                Sign Out
              </Button>
              <Link href="/" className="w-full">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ bgcolor: "#54BD95", "&:hover": { bgcolor: "#409875" } }}
                >
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
