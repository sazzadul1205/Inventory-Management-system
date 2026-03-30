// resources/js/pages/frontend/Layout/FrontEnd_Layout.jsx

import { useEffect, useState } from "react";

// Shared Components
import { HiArrowUp } from "react-icons/hi2";

import Footer from "../shared/Footer";
import Navbar from "../shared/navbar";

// Icon

const FrontEnd_Layout = ({ children }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300 flex flex-col">

      <Navbar />

      {/* Page Content */}
      <main className="grow">
        {children}
      </main>

      {/* <Footer /> */}

      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition"
        >
          <HiArrowUp size={22} />
        </button>
      )}

      <Footer />

    </div>
  );
};

export default FrontEnd_Layout;