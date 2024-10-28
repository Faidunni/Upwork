import fire from "../assets/Images/fire.svg";
import barChart from "../assets/Images/barChart.png";
import greenline from "../assets/Images/Green-line.png";
import phone1 from "../assets/Images/phone1.png";
import phone2 from "../assets/Images/phone2.png";
import arrowright from "../assets/Images/arrow-right.svg";

function MainContent() {
  return (
    <section className="lg:m-[6rem] m-[2rem]">
      <div className="flex justify-center items-center">
        <button className="font-poppins font-500 text-Primary-700 flex items-center gap-1 bg-neutral-50 border border-neutral-200 py-2 px-4 rounded-full">
          <img src={fire} alt="fire-icon" />
          <p className="uppercase">about us</p>
        </button>
      </div>
      <div className="mt-5 flex lg:flex-row flex-col gap-[70px]">
        <div className="bg-About-card-bg p-10 rounded-[20px] h-[100%]">
          <img src={barChart} alt="bar-chart" />
        </div>
        <div>
          <h1 className="font-poppins font-bold text-[48px] pr-20 leading-[120%] mb-2">
            ALL YOUR MONEY NEEDS IN ONE APP
          </h1>
          <div className="flex ">
            {/* Vertical Line */}
            <div className="w-2 bg-vertical-color rounded-full mr-4">
              <img src={greenline} alt="greenline" className="h-[105px]" />
            </div>

            {/* Card Section */}
            <div className="flex flex-col gap-4">
              <div className="bg-lime pl-[24px] pr-[150px] py-[20px] rounded-2xl ">
                <h3 className="font-poppins font-700 mb-2 opacity-[0.8]">
                  Expenses Tracker
                </h3>
                <p className="font-poppins font-400 ">
                  Our comprehensive selection of medications, <br />{" "}
                  supplements, and healthcare products .
                </p>
              </div>
              <div className="border border-border-neutral-200 pl-[24px] py-[20px]  rounded-2xl">
                <h3 className="font-poppins font-700 mb-2 text-Main-Dark">
                  Crypto Connection
                </h3>
                <p className="font-poppins font-400 opacity-[0.8] text-secondary ">
                  From advanced imaging technology such as MRI <br /> and CT
                  scanners to precision surgical tools.
                </p>
              </div>
              <div className="border border-border-neutral-200 pl-[24px] py-[20px]  rounded-2xl">
                <h3 className="font-poppins font-700 mb-2 text-Main-Dark">
                  Automated Invoicing
                </h3>
                <p className="font-poppins font-400 opacity-[0.8] text-secondary">
                  We're committed to leveraging the latest <br /> innovations in
                  medical technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured section */}
      <div className="mt-[120px] flex gap-10 lg:flex-row flex-col">
        <div className=" mt-5">
          <button className="font-poppins font-500 text-Primary-700 flex items-center gap-1 bg-neutral-50 border border-neutral-200 py-2 px-4 rounded-full mb-6">
            <img src={fire} alt="fire-icon" />
            <p className="uppercase text-[14px] font-500">featured</p>
          </button>
          <h1 className="font-poppins font-bold lg:text-[48px] pr-20 leading-[120%] mb-2 text-Secondary-Dark">
            ALL THE FEATURES IN ONE APP
          </h1>
          <ul className="space-y-4">
            <li className="text-list-text font-poppins font-400 capitalize lg:block hidden">
              <span className="mr-2">&#8226;</span> Get 3% cash back on everyday
              purchases, 2% on <br /> everything else4
            </li>
            <li className="text-list-text font-poppins font-400 capitalize lg:hidden block">
              <span className="mr-2">&#8226;</span> Get 3% cash back on everyday
              purchases, 2% on <br /> everything else4
            </li>
            <li className="text-list-text font-poppins font-400 capitalize">
              <span className="mr-2">&#8226;</span> Extra Spending Power when
              you have Rewards Checking through Upgrade6
            </li>
          </ul>
          <div className="mt-10 relative">
            <button className="font-poppins font-600 border-[0.8px] border-[#40AF3E] rounded-[44px] py-3 px-10">
              Get Started
            </button>
            <button className="bg-[#00B512] rounded-full p-2 absolute lg:left-[35%] left-[45%]">
              <img src={arrowright} alt="arrow-right" />
            </button>
          </div>
        </div>
        <div className="w-full  flex items-center justify-center md:justify-end mt-3 md:mt-0">
          <div className="bg-[#F6F9F8] pl-10 pr-5 pt-8 rounded-xl flex gap-20">
            <div className="mt-10">
              <img
                src={phone1}
                alt="services"
                className="h-32 md:h-48 lg:h-full"
              />
            </div>
            <div className="mb-10">
              <img src={phone2} alt="24" className="h-32 md:h-48 lg:h-full " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
