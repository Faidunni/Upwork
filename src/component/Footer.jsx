import bg from "../assets/Images/bg.png";
import arrowright from "../assets/Images/arrow-right-grey.svg";
import QrGroup from "../assets/Images/QrGroup.png";

function Footer() {
  return (
    <section className="bg-cover bg-center bg-no-repeat py-20 lg:py-40 px-4 text-white">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:px-20 gap-10 rounded-3xl px-4 pt-5 lg:pt-0"
      >
        <div>
          <h1 className="font-poppins text-[48px] font-600 text-white uppercase">
            Are you ready to start?
          </h1>
          <p className="font-poppins font-400 text-white">
            Personalize your settings, follow your progress, archive your
            highlights and notes automatically Glose is the ultimate reading{" "}
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
        <img src={QrGroup} alt="" />
      </div>
    </section>
  );
}

export default Footer;
