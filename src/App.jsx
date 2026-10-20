import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";



function NotFound() {
  return (
    <div className="container page-placeholder">
      <h1>صفحه پیدا نشد</h1>
      <a href="/">بازگشت به صفحه اصلی</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/reservation"
            element={<Reservation />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}