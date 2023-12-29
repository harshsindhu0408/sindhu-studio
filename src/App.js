import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <main class="flex justify-center gap-4 flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        
      </Routes>
    </main>
  );
}

export default App;
