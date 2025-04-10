import Cta from "./Components/Cta";
import Faq from "./Components/Faq";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Testimonials from "./Components/Testimonials";
import WelcomePage from "./Components/WelcomePage";

export default function Home() {
  return (
    <div className="bg-blue-100">
      <Header />
      <main>
        <WelcomePage />
        <Features />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
