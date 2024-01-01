import "./App.css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Testimonials from "./pages/Testimonials";
import Home from "./pages/Home";

const Portfolio = lazy(() => import("./pages/Portfolio"));
const GetQuote = lazy(() => import("./pages/GetQuote"));
const WeddingFilms = lazy(() => import("./pages/WeddingFilms"));
const Bookings = lazy(() => import("./pages/Bookings"));

const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <main class="flex justify-center gap-4 flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Portfolio />
            </Suspense>
          }
        />
        <Route
          path="/get-quote"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <GetQuote />
            </Suspense>
          }
        />
        <Route
          path="/wedding-films"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <WeddingFilms />
            </Suspense>
          }
        />
        <Route
          path="/bookings"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Bookings />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
