"use client";

import React, { useState } from "react";
import { Button, TextField, Alert } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      await login(email, password);
    } catch {
      setError("Invalid email or password");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#54BD95]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            For testing use: john@mail.com / changeme
          </p>
        </div>

        {error && <Alert severity="error">{error}</Alert>}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{
              bgcolor: "#54BD95",
              py: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#409875" },
            }}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-center">
            <Link href="/" className="text-sm text-[#54BD95] hover:underline">
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
