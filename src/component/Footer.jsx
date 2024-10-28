import Logo from "../assets/Images/Logo.svg";
import Google from "../assets/Images/Google-play.svg";
import Appstore from "../assets/Images/App-store.png";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";

const icons = [
  {
    img: <img src={facebook} alt="facebook-icon" />,
  },
  {
    img: <img src={instagram} alt="instagram-icon" />,
  },
  {
    img: <img src={linkedin} alt="linkedin-icon" />,
  },
  {
    img: <img src={twitter} alt="twitter-icon" />,
  },
];

function Footer() {
  return (
    <footer className="flex  flex-col  items-center">
      <img src={Logo} alt="upgrade-logo" />

      <div className="flex gap-4 my-4">
        <img src={Appstore} alt="App-store" />
        <img src={Google} alt="google-play-store" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap font-poppins space-x-8 my-4 text-[#646161] justify-center ">
        <p>Personal Loan</p>
        <p>One Card</p>
        <p>Savings</p>
        <p>Checking</p>
        <p>Help</p>
        <p>Support</p>
      </div>

      {/* social icons */}
      <div className="flex gap-2 my-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex items-center bg-[#006022] border border-neutral-50 rounded-full p-2"
          >
            {icon.img}
          </div>
        ))}
      </div>

      <p className="font-poppins font-400 text-[14px]">
        <span className="font-600 font-poppins ">Send Your Feedback :</span>{" "}
        moc.edargpu@tcatnoc
      </p>

      {/* Policies and Conditions */}
      <div className="flex flex-wrap font-poppins space-x-2 my-4 text-[#646161] justify-center font-400 text-[14px]">
        <p>Privacy Policy</p>
        <span>|</span>
        <p>Terms & Condition</p>
        <span>|</span>
        <p>Cookie Notice</p>
        <span>|</span>
        <p>Copyright Policy</p>
        <span>|</span>
        <p>Data Policy</p>
      </div>

      {/* Copyright */}
      <p className="text-[14px] font-poppins text-[#646161] mt-2 mb-8">
        &copy; 2024 Design Monks. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
