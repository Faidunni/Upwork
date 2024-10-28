import fire from "../assets/Images/fire.svg";
import quote from "../assets/Images/quote.svg";
import star from "../assets/Images/star.svg";
import Thamos from "../assets/Images/Thamos.svg";
import Richards from "../assets/Images/Richards.svg";
import Mike from "../assets/Images/Mike.svg";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
            <div className="text-green-600 mb-4">{person.quote}</div>
            <p className="font-poppins font-normal text-gray-700 mb-4">
              {person.text}
            </p>
            <div className="flex items-center gap-2 mb-2">{person.star}</div>
            <div className="flex items-center gap-3 mt-4">
              {person.img}
              <div className="text-left">
                <h3 className="font-semibold text-lg text-black">
                  {person.name}
                </h3>
                <p className="text-gray-500 text-sm">{person.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="mt-10 bg-green-500 text-white py-3 px-6 rounded-full flex items-center gap-2 hover:bg-green-600 transition">
        View More
        <span className="text-white text-lg">→</span>
      </button>
    </section>
  );
}

export default Testimonial;
