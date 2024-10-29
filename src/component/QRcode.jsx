import bg from "../assets/Images/bg.png";
import arrowright from "../assets/Images/arrow-right-grey.svg";
import QrGroup from "../assets/Images/QrGroup.png";

function QRcode() {
  return (
    <section className="bg-cover bg-center bg-no-repeat py-20 lg:pt-[10%] px-4 lg:px-20 text-white">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:px-20 gap-10 rounded-3xl px-4 pt-5 "
      >
        <div>
          <h1 className="font-poppins lg:text-[48px] text-[28px] font-600 text-white uppercase">
            Are you ready to start?
          </h1>
          <p className="font-poppins font-400 text-white">
            Personalize your settings, follow your progress, archive your
            highlights and notes automatically Glose is the ultimate reading{" "}
          </p>
          {/* Get Started Button */}
          <div className=" mt-10">
            <button className="px-8 py-3  bg-[#00B512] font-poppins font-600 rounded-3xl flex items-center space-x-2 relative text-neutral-50">
              Get Started
              <div className="bg-white rounded-full p-2 absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2">
                <img src={arrowright} alt="arrow icon" />
              </div>
            </button>
          </div>
        </div>
        <img src={QrGroup} alt="" />
      </div>
    </section>
  );
}

export default QRcode;
