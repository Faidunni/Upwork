import bg from "../assets/Images/bg.png";
import phone from "../assets/Images/phone3.png";
import atm from "../assets/Images/atm.png";
import fire from "../assets/Images/fire.svg";
import arrowright from "../assets/Images/arrow-right-grey.svg";

function TrustWorthness() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full flex items-center justify-center text-white lg:p-20 px-4 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-[20%]">
        {/* Left: Phone and Card Image */}
        <div className="relative flex items-center">
          <img src={phone} alt="Phone mockup" className="w-60 lg:w-80" />
          <img
            src={atm}
            alt="Card image"
            className="absolute bottom-[9.5%] left-20 lg:left-[57%] w-44 lg:w-60"
          />
        </div>
        <div className="lg:mt-0 mt-10">
          <button className="bg-background flex p-btn-p border border-[#014526] rounded-[100px] gap-2 items-center mb-4">
            <img src={fire} alt="fire-icon" />
            <p className="uppercase font-poppins text-[14px] font-500 text-white">
              trustworthiness
            </p>
          </button>
          <h1 className="font-poppins font-bold lg:text-[48px] text-neutral-50 leading-[60px] mb-2 ">
            WE VALUE YOUR TRUST AND SECURITY
          </h1>
          <p className="font-poppins font-400 text-[#DBDBDB] capitalize">
            Our mission is to make finance more accessible, transparent, and
            secure for everyone. With cutting.
          </p>
          <div className="mt-10">
            <button className="bg-[#00B512] text-neutral-50 px-8 py-3 rounded-[44px] font-poppins font-600 ">
              Get Started
            </button>
            <button className="bg-white rounded-full p-2 absolute lg:left-[53%] left-[25%]">
              <img src={arrowright} alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustWorthness;
