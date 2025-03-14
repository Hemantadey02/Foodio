import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Input, Button, Text, Radio } from '../../components'; // Assuming Input is a reusable component for text input
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    console.log("Sign up successful:", { name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#f447482b] to-[#e7f7ed]">
      <div className="relative bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        {/* Close Button */}
        <button onClick={()=> navigate(-2)} className="absolute top-9 right-7 text-gray-400 hover:text-gray-700">
          <XMarkIcon className="h-6 w-6 font-bold" />
        </button>

        {/* Sign Up Form */}
        <Text className="text-3xl font-bold mb-6">Sign up</Text>

        {error && <Text className="text-red-500 text-center mb-4">{error}</Text>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <div className="flex flex-col">
            {/* <label htmlFor="full-name" className="text-sm font-semibold mb-1">Full Name</label> */}
            <Input
              id="full-name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            {/* <label htmlFor="email" className="text-sm font-semibold mb-1">Email</label> */}
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            {/* <label htmlFor="password" className="text-sm font-semibold mb-1">Password</label> */}
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center mt-4">
            <Radio
              type="checkbox"
              required
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label className="ml-2 text-xs text-gray-600 flex items-center">
              I agree to Foodio's{" "}
              {/* <a href="#" className="text-red-600 hover:underline"> */}
              Terms of Service
              {/* </a> */}
              ,{" "}
              {/* <a href="#" className="text-red-600 hover:underline"> */}
              Privacy Policy
              {/* </a> */}
              {" "}
              and{" "}
              {/* <a href="#" className="text-red-600 hover:underline"> */}
              Content Policies
              {/* </a> */}
              .
            </label>
          </div>



          {/* Create Account Button */}
          <Button
            type="submit" color="red_A700_19"
            className="w-full hover:text-white font-semibold py-2 rounded hover:bg-red-400 mt-4"
          >
            Create account
          </Button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center justify-between">
          <hr className="w-full border-t border-gray-300" />
          <Text className="mx-3 text-gray-500">or</Text>
          <hr className="w-full border-t border-gray-300" />
        </div>

        {/* Google Sign In */}
        <Button className="cursor-not-allowed w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-2 rounded hover:bg-gray-100">
          <FaGoogle className="mr-2" /> Sign in with Google
        </Button>

        {/* Already have an account */}
        <Text className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 hover:underline">
            Log in
          </a>
        </Text>
      </div>
    </div>
  );
};

export default SignUpPage;
