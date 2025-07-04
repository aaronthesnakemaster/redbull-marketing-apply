import React from "react";
import Image from "next/image";

function ActualForm({
  email,
  setEmail,
  phone_number,
  setPhoneNumber,
  emailError,
  handleContinueWithEmail,
  NextStep,
  FacebookLogo,
}) {
  return (
    <div className="flex flex-col gap-4 w-full border border-gray-200 rounded-lg shadow-sm p-4 md:p-4 sm:p-3">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-xl font-semibold text-gray-900 m-0 px-1 sm:px-0">
          Are you ready to work as a Social Media Manager for Red Bull?
        </h2>
        <p className="text-gray-700 text-base m-0">
          Create an account or sign in.
        </p>
        <p className="text-gray-700 text-sm m-0 px-1 sm:px-0">
          We're looking for curious minds from a wide range of disciplines and
          backgrounds.
        </p>
      </div>

      <button
        onClick={() => NextStep("User clicked continue with Facebook")}
        className="bg-white border border-gray-200 w-full text-gray-800 text-sm font-semibold py-3 px-3 rounded-md flex items-center justify-center gap-2.5 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-50"
      >
        {FacebookLogo && (
          <Image
            src={FacebookLogo}
            alt="Facebook Logo"
            width={20}
            height={20}
            style={{ color: "#1877F2" }}
          />
        )}
        Continue with Facebook
      </button>

      <div className="relative flex items-center justify-center w-full before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:border-t before:border-gray-200">
        <span className="relative px-2 bg-white text-gray-500 text-sm">or</span>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor="email-input"
          className="text-gray-700 text-sm font-medium"
        >
          E-mail Address
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!emailError}
          aria-describedby={emailError ? "email-error" : undefined}
          className="w-full py-3 px-3 rounded-md border border-gray-300 text-sm box-border placeholder-gray-400 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)] focus:outline-none"
        />
        {emailError && (
          <div
            id="email-error"
            className="text-red-500 text-xs mt-0.5 font-medium"
          >
            {emailError}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor="phone-input"
          className="text-gray-700 text-sm font-medium"
        >
          Phone Number
        </label>
        <input
          id="phone-input"
          type="tel"
          placeholder="Enter your phone number"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full py-3 px-3 rounded-md border border-gray-300 text-sm box-border placeholder-gray-400 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)] focus:outline-none"
        />
      </div>

      <button
        onClick={handleContinueWithEmail}
        className="bg-red-600 border-none w-full text-white text-sm font-medium py-3 px-5 rounded-md flex items-center justify-center gap-2.5 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-red-700 mt-1"
      >
        Continue
      </button>
    </div>
  );
}

export default ActualForm;
