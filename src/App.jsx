import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Add this
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Airlines from "./pages/Airlines";
import Privacy from "./pages/Privacy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import Refund from "./pages/Refund";
import Child from "./pages/Child";
import Business from "./pages/Business";
import Footer from "./components/Footer";
import Results from "./pages/Results";
import Book from "./pages/Book";
import TaxesFees from "./pages/TaxesFees";
import ServiceFees from "./pages/ServiceFees";
import Status from "./pages/Status";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ Add here */}
      <Header />

      <main className="pt-16 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disclaimer.html" element={<Disclaimer />} />
          <Route path="/refund-policy.html" element={<Refund />} />
          <Route path="/child-flight-bookking.html" element={<Child />} />
          <Route path="/business-class-flight.html" element={<Business />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/airlines-reservation.html" element={<Airlines />} />
          <Route path="/privacy-policy.html" element={<Privacy />} />
          <Route path="/terms-conditions.html" element={<TermsConditions />} />
          <Route path="/results.html" element={<Results/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/taxes.html" element={<TaxesFees/>} />
          <Route path="/services.html" element={<ServiceFees/>} />
          <Route path="/status.html" element={<Status/>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
