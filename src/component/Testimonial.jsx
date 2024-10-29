import fire from "../assets/Images/fire.svg";
import quote from "../assets/Images/quote.png";
import star from "../assets/Images/star.svg";
import Thamos from "../assets/Images/Thamos.svg";
import Richards from "../assets/Images/Richards.svg";
import Mike from "../assets/Images/Mike.svg";
import arrowright from "../assets/Images/arrow-right.svg";

const people = [
  {
    quote: <img src={quote} alt="quote" />,
    text: "I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product",
    img: <img src={Mike} alt="Mike" className="rounded-full w-12 h-12" />,
    star: <img src={star} alt="star" className="w-16" />,
    name: "Mike Torello",
    role: "CEO of Initech",
  },
  {
    quote: <img src={quote} alt="quote" />,
    text: "We have successfully sold digital product and are happy with the results & look forward to using it again.",
    img: (
      <img src={Richards} alt="Richards" className="rounded-full w-12 h-12" />
    ),
    background: "#004852", // Updated to use hex color directly
    color: "text-[#ffffff]",
    star: <img src={star} alt="star" className="w-16" />,
    name: "Richards Hawkins",
    role: "Marketing Manager of Upnow",
  },
  {
    quote: <img src={quote} alt="quote" />,
    text: "Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible.",
    img: <img src={Thamos} alt="Thamos" className="rounded-full w-12 h-12" />,
    star: <img src={star} alt="star" className="w-16" />,
    name: "Thomas Magnum",
    role: "Barellon NSW",
  },
];

function Testimonial() {
  return (
    <section className="lg:px-20 px-5 bg-[#F6F9F8] py-20 flex flex-col items-center">
      {/* Testimonial Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <button className="bg-neutral-50 border border-neutral-200 py-2 px-4 rounded-full flex items-center gap-2 mb-4">
          <img src={fire} alt="fire-icon" />
          <p className="uppercase font-poppins font-medium text-Primary-700 text-sm">
            Testimonial
          </p>
        </button>
        <h3 className="text-4xl font-semibold text-black">
          Get to Know Our Clients
        </h3>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        {people.map((person, index) => (
          <div
            key={index}
            style={{ backgroundColor: person.background || "#FFFFFF" }}
            className="p-8 rounded-lg font-poppins text-center flex flex-col"
          >
            <div className={`text-green-600 mb-4 ${person.color || ""}`}>
              {person.quote}
            </div>
            <p
              className={`font-poppins font-400 text-[#161919] mb-4 ${
                person.color || ""
              }`}
            >
              {person.text}
            </p>
            <div className="flex items-center gap-3 mt-4">
              {person.img}
              <div className="text-left flex flex-col">
                {person.star}
                <h3
                  className={`font-500 mt-1 text-[#161919] ${
                    person.color || ""
                  }`}
                >
                  {person.name}
                </h3>
                <p className="text-[#A1A1A1] text-sm font-400">{person.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-10 py-4 border-[0.8px] border-[#40AF3E] bg-white font-semibold rounded-[44px] flex items-center space-x-2 relative font-poppins">
          View More
          <div className="bg-[#00B512] rounded-full p-3 absolute right-[-2rem] top-1/2 transform -translate-y-1/2">
            <img src={arrowright} alt="arrow icon" />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
