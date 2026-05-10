import React from "react";
import darkLogo from "../assets/logo_dark.svg";
const Footer = () => {
  return (
    <footer className="py-8 px-32 flex justify-between gap-10 bg-gray-900 text-white overflow-x-hidden max-sm:flex-col max-sm:px-10">
      <div className="w-1/3 max-sm:w-1/1">
        <img src={darkLogo} alt="dark logo" />
        <p className="mt-4 text-gray-400">
          Ahmed Basuony is a Full Stack Developer focused on backend systems,
          building reliable APIs, web applications, and scalable services with
          Node.js, React, TypeScript, MongoDB, and Docker.
        </p>
      </div>
      <div className="w-1/5 max-sm:w-1/1">
        <h3 className="text-xl">Navigation</h3>
        <ul className="flex flex-col mt-4 gap-2">
          <li className="text-gray-400">
            <a href="#Home">Home</a>
          </li>
          <li className="text-gray-400">
            <a href="#About">About</a>
          </li>
          <li className="text-gray-400">
            <a href="#Contact">Contact</a>
          </li>
          <li className="text-gray-400">
            <a href="#Privacy">Privacy policy</a>
          </li>
        </ul>
      </div>
      <div className="w-1/3 max-sm:w-1/1">
        <h3 className="text-xl">Subscribe to our newsletter</h3>
        <p className="my-4 text-gray-400">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 bg-gray-800 flex-1 rounded"
          />
          <button className="bg-blue-600 p-3 rounded">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
