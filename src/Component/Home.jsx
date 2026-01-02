import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  Heart,
  ShoppingCart,
  ChevronDown,
  Search,
} from "lucide-react";
import { useState } from "react";
import "swiper/css";

export default function Home() {
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [featureDropdownOpen, setFeatureDropdownOpen] = useState(false);
  const [feature1SubOpen, setFeature1SubOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  return (
    <>
      <div className="w-full mb-7 sticky top-0 z-50">
        <div className="bg-[#183354] flex md:flex-row h-10  justify-between px-4 items-center text-white">
          <div className="flex gap-3 font-medium">
            <a className="hover:text-[#f4776a] transition duration-300 cursor-pointer">
              Forum
            </a>
            <a className="hover:text-[#f4776a] transition duration-300 cursor-pointer">
              About
            </a>
            <a className="hover:text-[#f4776a] transition duration-300 cursor-pointer">
              Faq's
            </a>
            <a className="hover:text-[#f4776a] transition duration-300 cursor-pointer">
              All recipes
            </a>
          </div>

          <div className="flex gap-3 items-center">
            <h5 className="font-bold text-[16px]">Follow Us:</h5>
            <div className="flex gap-2 items-center">
              <Facebook
                size={16}
                className="hover:text-[#f4776a] cursor-pointer hover:fill-[#f4776a]"
              />
              <Twitter
                size={16}
                className="hover:text-[#f4776a] cursor-pointer hover:fill-[#f4776a]"
              />
              <Instagram
                size={16}
                className="hover:text-[#f4776a] cursor-pointer"
              />
              <Linkedin
                size={16}
                className="hover:text-[#f4776a] cursor-pointer hover:fill-[#f4776a]"
              />
            </div>
          </div>
        </div>

        <nav className="h-20 border-b border-[#bdbdbd] px-4  flex items-center justify-between bg-white shadow-sm ">
          <div className="flex items-center gap-4">
            <Menu
              size={36}
              className="text-[#f4776a] cursor-pointer"
              strokeWidth={1.3}
            />

            <div
              className="relative"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <button className="inline-flex items-center text-black hover:text-[#f4776a] font-medium text-[14px] px-3 py-2 cursor-pointer">
                Home
                <ChevronDown size={16} className="ml-1" />
              </button>

              {homeDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 w-48 shadow-lg rounded z-20">
                  <ul className="text-sm text-gray-700 font-medium">
                    {[
                      "Default",
                      "Gaming",
                      "Technology",
                      "Travel",
                      "Crypto",
                      "Newspaper",
                    ].map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="inline-flex items-center w-full pl-2 pr-4 py-1.5 border-l-4 border-transparent hover:border-[#f4776a] hover:text-[#f4776a] duration-300"
                        >
                          Home 0{i + 1} - {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-[14px] text-black font-medium hover:text-[#f4776a] cursor-pointer"
            >
              About Us
            </a>

            <div
              className="relative"
              onMouseEnter={() => setFeatureDropdownOpen(true)}
              onMouseLeave={() => {
                setFeatureDropdownOpen(false);
                setFeature1SubOpen(false);
              }}
            >
              <button className="inline-flex items-center text-black hover:text-[#f4776a] font-medium text-[14px] px-3 py-2 cursor-pointer">
                Feature
                <ChevronDown size={16} className="ml-1" />
              </button>

              {featureDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 w-48 shadow-lg rounded z-20">
                  <ul className="text-sm text-gray-700 font-medium">
                    <li
                      className="relative"
                      onMouseEnter={() => setFeature1SubOpen(true)}
                      onMouseLeave={() => setFeature1SubOpen(false)}
                    >
                      <a
                        href="#"
                        className="inline-flex items-center justify-between w-full pl-2 pr-4 py-1.5 border-l-4 border-transparent hover:border-[#f4776a] hover:text-[#f4776a] duration-300"
                      >
                        Single Post Layout
                        <ChevronDown size={14} />
                      </a>

                      {feature1SubOpen && (
                        <div className="absolute left-full top-0 bg-white border border-gray-200 w-48 shadow-lg rounded ml-1 z-30">
                          <ul className="text-sm text-gray-700 font-medium">
                            <li>
                              <a
                                href="#"
                                className="inline-flex items-center w-full pl-2 pr-4 py-1.5 border-l-4 border-transparent hover:border-[#f4776a] hover:text-[#f4776a] duration-300"
                              >
                                Single Post 01
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="inline-flex items-center w-full pl-2 pr-4 py-1.5 border-l-4 border-transparent hover:border-[#f4776a] hover:text-[#f4776a] duration-300"
                              >
                                Single Post 02
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center w-full pl-2 pr-4 py-1.5 border-l-4 border-transparent hover:border-[#f4776a] hover:text-[#f4776a] duration-300"
                      >
                        Author Details
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setCategoriesDropdownOpen(true)}
              onMouseLeave={() => setCategoriesDropdownOpen(false)}
            >
              <button className="inline-flex items-center text-black hover:text-[#f4776a] font-medium text-[14px] px-3 py-2 cursor-pointer">
                Categories
                <ChevronDown size={16} className="ml-1" />
              </button>

              {categoriesDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 w-48 shadow-lg rounded z-20">
                  <ul className="text-sm text-gray-700 font-medium">
                    {["Blog Default", "Blog Layout 01", "Blog Layout 02"].map(
                      (item, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="inline-flex items-center w-full pl-2 pr-4 py-1.5 border-l-4 border-transparent hover:border-[#f4776a] hover:text-[#f4776a] duration-300"
                          >
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-[14px] text-black font-medium hover:text-[#f4776a] cursor-pointer"
            >
              Contact
            </a>

            <img src="/src/assets/logo.webp" alt="logo" />
          </div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-56 h-10 rounded-full pl-4 pr-10 text-sm bg-transparent text-black placeholder-black/50 outline-none border border-gray-300"
              />
              <span className="absolute right-3 top-2.5 cursor-pointer">
                <Search size={20} />{" "}
              </span>
            </div>

            <Heart
              size={22}
              className="text-[#183354] cursor-pointer hover:text-[#f4776a] transition duration-300"
            />
            <ShoppingCart
              size={22}
              className="text-[#183354] cursor-pointer hover:text-[#f4776a] transition duration-300"
            />
            <span className="font-semibold text-[#183354] text-sm">$0.00</span>
            <button className="px-5 py-2 bg-[#f4776a] hover:bg-[#d86157] cursor-pointer text-white font-medium rounded-full text-sm transition">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
