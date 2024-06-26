import React from "react";
import { newsletter } from "@/assets/picture";
const Newsletter: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center p-4 rounded-md"
      style={{ backgroundImage: `url(${newsletter})` }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Subscribe to our Newsletter
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
          <div className="md:col-span-2 lg:col-span-1">
            <p className="text-center text-xl font-semibold text-slate-200">
              Subscribe to the Newsletter to stay connected to our website and
              receive the details about the latest products and details.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 mb-2 md:mb-0 md:mr-2 bg-gray-800 text-white w-full md:w-80 lg:w-96 h-12 placeholder:font-mono"
            />
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 px-4 h-12 text-center text-base"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
