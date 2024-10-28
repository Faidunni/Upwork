import Hero from "./component/Hero";
import MainContent from "./component/MainContent";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import TrustWorthness from "./component/TrustWorthness";
import QRcode from "./component/QRcode";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div>
        <Hero />
        <MainContent />
        <TrustWorthness />
        <Services />
        <Testimonial />
        <QRcode />
        <Footer />
      </div>
    </>
  );
}

export default App;
