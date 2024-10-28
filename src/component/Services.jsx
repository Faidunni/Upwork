import fire from "../assets/Images/fire.svg";
import PhoneGroup from "../assets/Images/PhoneGroup.png";
import globe from "../assets/Images/globe.svg";
import chart from "../assets/Images/chart.svg";
import dollar from "../assets/Images/dollar.svg";
import Home from "../assets/Images/Home.png";
import Tool from "../assets/Images/tool.png";
import group from "../assets/Images/group.png";
import SlatePhone from "../assets/Images/SlatePhone.png";
import arrowright from "../assets/Images/arrow-right.svg";

function Services() {
  return (
    <section className="lg:px-20 px-5 flex flex-col md:flex-row flex-wrap items-center justify-center">
      <div className="container mx-auto flex justify-center items-center">
        <button className="bg-neutral-50 border border-neutral-200 py-[6px] pr-[16px] pl-[12px] rounded-[100px] flex items-center gap-1">
          <img src={fire} alt="fire-icon" />
          <p className="uppercase font-poppins font-500 text-Primary-700">
            services
          </p>
        </button>
      </div>
      <p className="font-poppins lg:text-[48px] font-600 text-center uppercase lg:leading-[50px] mt-4 text-[35px]">
        Can Help You Achieve <br />
        Financial Success
      </p>
      <div className="flex lg:flex-row flex-col bg-[#F6F9F8] rounded-[20px] border border-black-opacity-06 px-8 pt-2 lg:pb-0 pb-2  gap-[10%]">
        <img src={PhoneGroup} alt="phones" />
        <div className="lg:mt-[15%] mt-10">
          <div className="bg-[#03A300] p-2 rounded-full w-7 mb-2">
            <img src={globe} alt="globe" />
          </div>
          <h3 className="capitalize font-poppins lg:text-[45px] font-500 lg:leading-[50px] text-[30px]">
            Transfers across the globe are free
          </h3>
        </div>
      </div>
      <div className="mt-5 flex gap-5 lg:flex-row flex-col">
        <div className="flex flex-col bg-[#F6F9F8] rounded-[20px] border border-black-opacity-06 px-8 pt-10">
          <div className="bg-[#03A300] p-1 rounded-full w-7 mb-2">
            <img src={chart} alt="cahrt" />
          </div>
          <h3 className="font-poppins font-500 text-[32px] leading-[40px] mb-2">
            Create A Card That Is Unique And Customized
          </h3>
          <p className="font-poppins capitalize font-400 text-[#676666] mb-[70px]">
            we offer a comprehensive range of innovative financial services
            tailored to meet your needs. Our services include High-Yield Savings
            Accounts.
          </p>
          <div className="pl-[90px] mt-2">
            <img src={Home} alt="home" />
          </div>
        </div>
        <div className="flex flex-col bg-[#001027] rounded-[20px] border border-black-opacity-06 px-8 pt-10">
          <div className="bg-[#03A300] p-2 rounded-full w-7 mb-2">
            <img src={Tool} alt="cahrt" />
          </div>
          <h3 className="font-poppins font-500 text-[32px] leading-[40px] mb-2 text-white">
            Personalized Insights And Financial Goals
          </h3>
          <p className="font-poppins capitalize font-400 text-[#676666] mb-[70px]">
            we offer a comprehensive range of innovative financial services
            tailored to meet your needs. Our services include High-Yield Savings
            Accounts.
          </p>
          <div className="mt-5">
            <img src={group} alt="home" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-5 grid-cols-1">
        <div className="bg-[#E2FF54] rounded-[20px] border border-black-opacity-06 p-8 ">
          <h3 className="font-poppins font-500 text-[32px] capitalize">
            100% <br />
            Dedication
          </h3>
          <p className="text-[#403F3F] font-poppins font-400 capitalize">
            we offer a comprehensive range of innovative financial services
            tailored to meet your needs.
          </p>
        </div>
        <div className="bg-[#F6F9F8] py-8 pl-8 pr-0 rounded-[20px] border border-black-opacity-06 flex">
          <div className="flex flex-col">
            <div className="bg-[#03A300] p-2 rounded-full w-7 mb-2">
              <img src={dollar} alt="dollar" />
            </div>
            <h3 className="font-poppins font-500 text-[24px] capitalize">
              Hold money in 30+ currencies
            </h3>
          </div>
          <div className="w-full">
            <img src={SlatePhone} alt="slate-phone" />
          </div>
        </div>
        <div className="bg-[#2D907A] p-8  rounded-[20px] border border-black-opacity-06 flex items-center justify-center">
          <h2 className="font-poppins text-center text-white text-[40px] capitalize font-500 align-middle justify-center">
            Visit Our Services page
          </h2>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-0.5 border-green-500 bg-white font-semibold rounded-3xl flex items-center space-x-2 relative z-10">
          View More
          <div className="bg-[#00B512] rounded-full p-2 absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2">
            <img src={arrowright} alt="arrow icon" className="w-6 h-6" />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Services;
