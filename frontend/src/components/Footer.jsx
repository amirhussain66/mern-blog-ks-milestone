import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center Section - Big Text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-teal-400 leading-snug mb-2">
            Welcome to the Blogging World
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Discover, Create, and Share Amazing Stories!
          </p>
        </div>

     

        {/* Bottom Section - "See You Soon" Message */}
        <div className="text-center mt-8">
          <p className="text-lg text-teal-400 italic">
            See You Soon! Stay Connected!
          </p>
        </div>

        {/* Footer Quote */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <p className="text-center text-gray-400 text-sm italic">
            "Blogging is not just about writing; it's about connecting with the
            world and inspiring others."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
