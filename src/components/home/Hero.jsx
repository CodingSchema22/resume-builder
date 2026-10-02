
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Keep your existing companiesLogo array here
  const companiesLogo = [
    // Your existing SVG logos...
  ];

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="min-h-screen pb-12 sm:pb-16 md:pb-20">

          {/* ================= NAVBAR ================= */}
          <nav className="relative z-50 flex items-center justify-between w-full py-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">

            {/* Logo */}
            <Link to="/">
              <img
                src="/logo.svg"
                alt="logo"
                className="h-8 sm:h-9 md:h-11 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm text-slate-800">
              <a
                href="#"
                className="hover:text-green-600 transition-colors"
              >
                Home
              </a>

              <a
                href="#features"
                className="hover:text-green-600 transition-colors"
              >
                Features
              </a>

              <a
                href="#testimonials"
                className="hover:text-green-600 transition-colors"
              >
                Testimonials
              </a>

              <a
                href="#cta"
                className="hover:text-green-600 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/app?state=register"
                className="px-4 lg:px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
              >
                Get started
              </Link>

              <Link
                to="/app?state=login"
                className="px-4 lg:px-6 py-2 border border-slate-300 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 active:scale-90 transition"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h17" />
                <path d="M4 12h17" />
                <path d="M4 18h17" />
              </svg>
            </button>
          </nav>

          {/* ================= MOBILE MENU ================= */}
          <div
            className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm
            flex flex-col items-center justify-center gap-7
            md:hidden transition-all duration-300
            ${
              menuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-medium"
            >
              Home
            </a>

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-medium"
            >
              Features
            </a>

            <a
              href="#testimonials"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-medium"
            >
              Testimonials
            </a>

            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-medium"
            >
              Contact
            </a>

            <div className="flex flex-col gap-3 w-48 mt-3">
              <Link
                to="/app?state=register"
                onClick={() => setMenuOpen(false)}
                className="text-center px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-full"
              >
                Get started
              </Link>

              <Link
                to="/app?state=login"
                onClick={() => setMenuOpen(false)}
                className="text-center px-5 py-2.5 bg-white text-slate-800 rounded-full"
              >
                Login
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-10 h-10 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* ================= HERO ================= */}
          <section className="relative flex flex-col items-center justify-center text-sm px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 text-black">

            {/* Background Glow */}
            <div
              className="
                absolute
                top-24 sm:top-20 md:top-10
                left-1/2
                -translate-x-1/2
                -z-10
                w-64 h-64
                sm:w-80 sm:h-80
                md:w-96 md:h-96
                xl:w-[480px] xl:h-[480px]
                bg-green-300
                blur-[90px]
                md:blur-[110px]
                opacity-30
              "
            />

            {/* ================= AVATARS + STARS ================= */}
            <div className="flex flex-col sm:flex-row items-center justify-center mt-16 sm:mt-20 md:mt-24 gap-2 sm:gap-3">

              {/* Avatars */}
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                  alt="user"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-full border-2 border-white"
                />

                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="user"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-full border-2 border-white"
                />

                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt="user"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-full border-2 border-white"
                />

                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                  alt="user"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-full border-2 border-white"
                />

                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="user"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-full border-2 border-white"
                />
              </div>

              {/* Rating */}
              <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-green-600"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-700">
                  Used by 10,000+ users
                </p>
              </div>
            </div>

            {/* ================= HEADING ================= */}
            <h1
              className="
                w-full
                max-w-5xl
                text-center
                font-semibold
                text-4xl
                sm:text-5xl
                md:text-6xl
                leading-tight
                sm:leading-[1.15]
                md:leading-[1.15]
                mt-5
                md:mt-6
              "
            >
              Land your Dream Job with{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-green-700
                  to-green-600
                  bg-clip-text
                  text-transparent
                  inline
                "
              >
                AI-powered resumes
              </span>
            </h1>

            {/* ================= DESCRIPTION ================= */}
            <p
              className="
                w-full
                max-w-md
                text-center
                text-sm
                sm:text-base
                text-slate-600
                leading-6
                mt-5
                sm:mt-6
                px-2
              "
            >
              Explore a growing library of over 320+ beautifully crafted,
              customizable components.
            </p>

            {/* ================= CTA BUTTONS ================= */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                justify-center
                gap-3
                sm:gap-4
                w-full
                sm:w-auto
                mt-6
              "
            >
              <Link
                to="/app"
                className="
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  rounded-full
                  px-7
                  sm:px-9
                  h-12
                  w-full
                  sm:w-auto
                  flex
                  items-center
                  justify-center
                  transition-colors
                "
              >
                Get started

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-slate-400
                  hover:bg-green-50
                  transition
                  rounded-full
                  px-7
                  h-12
                  w-full
                  sm:w-auto
                  text-slate-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>

                <span>Try demo</span>
              </button>
            </div>

            {/* ================= TRUST TEXT ================= */}
            <p className="text-slate-600 text-center mt-12 sm:mt-14 mb-3">
              Trusted by leading brands, including
            </p>

            {/* ================= COMPANY LOGOS ================= */}
            <div
              id="logo-container"
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-8
                gap-y-5
                sm:gap-x-10
                md:gap-x-12
                max-w-4xl
                w-full
                mx-auto
                py-4
                px-2
              "
            >
              {companiesLogo.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-[100px] sm:w-[120px]"
                >
                  {company.logo}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ================= FONT ================= */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Hero;