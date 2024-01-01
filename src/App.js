import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Testimonials from "./pages/Testimonials";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import GetQuote from "./pages/GetQuote";
import WeddingFilms from "./pages/WeddingFilms";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <main class="flex justify-center gap-4 flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/wedding-films" element={<WeddingFilms />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </main>
  );
}

export default App;
