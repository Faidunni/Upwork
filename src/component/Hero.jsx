import React, { useState } from "react";
import logo from "../assets/Images/Logo.svg";
import fire from "../assets/Images/fire.svg";
import HeroGroup from "../assets/Images/HeroGroup.svg";
import arrowright from "../assets/Images/arrow-right-grey.svg";
import AmazonPay from "../assets/Images/AmazonPay.svg";
import samsung from "../assets/Images/samsung.svg";
import Spherule from "../assets/Images/Spherule.svg";
import Visa from "../assets/Images/Visa.svg";
import Paypal from "../assets/Images/Paypal.svg";
import Alipay from "../assets/Images/Alipay.png";
import bg from "../assets/Images/bg.png";

const Navlinks = [
  { list: "Personal Loan" },
  { list: "One Card" },
  { list: "Savings" },
  { list: "Checking" },
  { list: "Help" },
];

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header section */}
      <header className="flex justify-between items-center lg:px-[100px] px-4 py-5">
        <img src={logo} alt="upgrade-logo" className="w-[100px] md:w-[122px]" />

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex gap-4">
          {Navlinks.map((link, index) => (
            <li key={index} className="font-poppins text-primary font-400">
              {link.list}
            </li>
          ))}
        </ul>

        {/* Sign In Button */}
        <button className="hidden md:block font-poppins border border-primary rounded-xl font-600 text-primary px-4 md:px-8 py-2 capitalize">
          Sign In
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="text-primary text-2xl">☰</span>
        </button>
      </header>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center  w-full py-4 gap-2 bg-neutral-50 h-screen">
          {Navlinks.map((link, index) => (
            <li key={index} className="font-poppins font-400 mb-5">
              {link.list}
            </li>
          ))}
          <button className="font-poppins border border-primary rounded-xl font-600  px-4 py-2 capitalize">
            Sign In
          </button>
        </ul>
      )}

      {/* Hero section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:px-[100px] gap-10 rounded-3xl px-4 pt-5">
        <div>
          <button className="font-poppins font-500 text-white flex items-center gap-1 bg-neutral-200 border border-neutral-200 py-2 px-4 rounded-full mb-6">
            <img src={fire} alt="fire-icon" />
            <p className="uppercase text-[14px] font-500">
              100% trusted platform
            </p>
          </button>
          <h1 className="uppercase text-white font-poppins font-700 text-[28px] md:text-[36px] lg:text-[48px] leading-[1.2] mb-2">
            finance with security and{" "}
            <span className="text-[#e7f949]">flexibility</span>
          </h1>
          <p className="text-primary font-poppins font-400 capitalize lg:pr-[100px]">
            no-fee checking account with cash back rewards. enjoy fee-free
            banking and earn cash back on your everyday purchases
          </p>
          <div className="mt-10">
            <button className="px-6 md:px-8 py-3 bg-[#00B512] font-poppins font-600 rounded-3xl flex items-center space-x-2 relative text-neutral-50">
              Open Account
              <div className="bg-white rounded-full p-2 absolute right-[-1rem] md:right-[-1.5rem] top-1/2 transform -translate-y-1/2">
                <img src={arrowright} alt="arrow icon" />
              </div>
            </button>
          </div>
        </div>
        <img
          src={HeroGroup}
          alt="Hero-Phone"
          className="w-full max-w-[300px] md:max-w-[500px]"
        />
      </div>

      {/* Hero account logos */}
      <div className="bg-[#04684C] lg:px-[100px] py-2 mt-5 px-4">
        <div className="flex items-center lg:gap-20 gap-5">
          <div>
            <img src={Spherule} alt="spherule" />
          </div>
          <div>
            <img src={samsung} alt="samsung-logo" />
          </div>
          <div>
            <img src={Visa} alt="visa-logo" />
          </div>
          <div>
            <img src={AmazonPay} alt="amazonpay-logo" />
          </div>
          <div>
            <img src={Paypal} alt="paypal-logo" />
          </div>
          <div>
            <img src={Alipay} alt="alipay-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
