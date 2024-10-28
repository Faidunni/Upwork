import Hero from "./component/Hero";
import MainContent from "./component/MainContent";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import TrustWorthness from "./component/TrustWorthness";

function App() {
  return (
    <>
      <div>
        <Hero />
        <MainContent />
        <TrustWorthness />
        <Services />
        <Testimonial />
      </div>
    </>
  );
}

export default App;
