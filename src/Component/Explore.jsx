import {
  Calendar,
  CircleUserRound,
  Clock4,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { PiPinterestLogo } from "react-icons/pi";

export default function Explore() {
  return (
    <>
      <div className="mb-40">
        <div className="w-full h-[125vh] py-2 px-5 gap-10  flex ">
          <div className="flex  w-[75%] p-4 ">
            <div className="w-full flex flex-col gap-3.5  ">
              <div className="flex items-center justify-between mb-2 ">
                <h2 className="font-bold text-[28px] text-black  ">
                  Explore Latest Recipes
                </h2>
                <a
                  className="px-8 self-baseline py-1.5 font-semibold rounded-md cursor-pointer text-white  bg-[#f4796c] transition-all duration-500 hover:bg-[#173452] "
                  href=""
                >
                  View All
                </a>
              </div>
              <div className="h-6 w-full flex gap-5   ">
                <span className="h-full w-[6%]  border- bg-[#f4796c]"></span>
                <span className="h-full w-[94%] border-[#1734523e] border-t border-b pb-1  "></span>
              </div>

              <div className=" flex w-full  gap-5  h-full mt-4 ">
                <div className=" w-[67%]  ">
                  <div className="flex flex-col gap-5 px-0">
                    <div className="relative w-full h-full">
                      <div className="overflow-hidden rounded-md min-h-full">
                        <img
                          className="w-full object-cover hover:scale-115 transition-transform duration-700 cursor-pointer"
                          src="/src/assets/exploreleft1.webp"
                          alt="Featured post"
                        />
                      </div>

                      <span className="text-white bg-[#f57769] px-4 py-1 hover:bg-[#1a3157] transition duration-500 rounded-md absolute -bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer">
                        Appetizer
                      </span>
                    </div>
                    <h3
                      className="text-[25px] font-semibold text-center px-0 text-black  hover:bg-size[100%_2px] cursor-pointer"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #000, #fff)",
                        backgroundSize: "0% 2px",
                        backgroundPosition: "left bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        transition: "background-size 0.5s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundSize = "100% 2px")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundSize = "0% 2px")
                      }
                    >
                      Favorite Browned Butter <br /> Chocolate Cookies Daily
                      Breakfast
                    </h3>
                    <ul className="flex items-center gap-3  justify-center px-2 text-black/50 font-semibold  ">
                      <li className="flex gap-1.5 text-[14px] items-center">
                        <CircleUserRound size={18} />
                        By
                        <a
                          href=""
                          className="hover:text-[#f57769] transition-colors"
                        >
                          Admin
                        </a>
                      </li>

                      <li className="flex gap-1.5 text-[14px] items-center">
                        <Calendar size={18} />
                        <span>03 December 2025 </span>
                      </li>

                      <li className="flex gap-1.5 text-[14px] items-center">
                        <Clock4 size={18} />
                        <span>20 Mins </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-[33%]  flex flex-col gap-6   ">
                  <div className="gap-3 flex flex-col">
                    <div className="relative w-full ">
                      <div className="overflow-hidden rounded-md min-h[280px]">
                        <img
                          className="w-full object-cover hover:scale-115 transition-transform duration-700 cursor-pointer"
                          src="/src/assets/exploreleft1.webp"
                          alt="Featured post"
                        />
                      </div>

                      <span className="text-white bg-[#f57769] px-4 py-1 hover:bg-[#1a3157] transition duration-500 rounded-md absolute -bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer">
                        Breakfast
                      </span>
                    </div>
                    <h3
                      className="text-[16px] pt-1 font-semibold text-center px-0 text-black  hover:bg-size[100%_1px] cursor-pointer"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #fff, #000)",
                        backgroundSize: "0% 2px",
                        backgroundPosition: "left bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        transition: "background-size 0.5s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundSize = "100% 1px")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundSize = "0% 1px")
                      }
                    >
                      The Potentially Dangerous Non-Accessibility Of Cookie
                    </h3>
                    <ul className="flex items-center gap-2 justify-center px-2 text-black/50 font-semibold  ">
                      <li className="flex gap-1.5 text-[14px] items-center">
                        <CircleUserRound size={18} />
                        By
                        <a
                          href=""
                          className="hover:text-[#f57769] transition-colors"
                        >
                          Admin
                        </a>
                      </li>

                      <li className="flex gap-1.5 text-[14px] items-center">
                        <Calendar size={18} />
                        <span>03 December 2025 </span>
                      </li>
                    </ul>
                  </div>

                  <div className="gap-3 flex flex-col">
                    <div className="relative w-full ">
                      <div className="overflow-hidden rounded-md min-h[280px]">
                        <img
                          className="w-full object-cover hover:scale-115 transition-transform duration-700 cursor-pointer"
                          src="/src/assets/exploreleft2.webp"
                          alt="Featured post"
                        />
                      </div>

                      <span className="text-white bg-[#f57769] px-4 py-1 hover:bg-[#1a3157] transition duration-500 rounded-md absolute -bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer">
                        Lunch
                      </span>
                    </div>
                    <h3
                      className="text-[18px] pt-1 font-semibold text-center px-0 text-black  hover:bg-size[100%_1px] cursor-pointer"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #000, #fff)",
                        backgroundSize: "0% 2px",
                        backgroundPosition: "left bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        transition: "background-size 0.5s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundSize = "100% 1px")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundSize = "0% 1px")
                      }
                    >
                      One-Pan Baked Sausage <br /> And Lentils
                    </h3>
                    <ul className="flex items-center  gap-3 justify-center px-2 text-black/50 font-semibold  ">
                      <li className="flex gap-1.5 text-[14px] items-center">
                        <CircleUserRound size={18} />
                        By
                        <a
                          href=""
                          className="hover:text-[#f57769] transition-colors"
                        >
                          Admin
                        </a>
                      </li>

                      <li className="flex gap-1.5 text-[14px] items-center">
                        <Calendar size={18} />
                        <span>03 December 2025 </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[25%] md:pt-30 gap-4 ">
            <div className="relative w-full bg-cover h-[350px] bg-[url(src/assets/explorebg.webp)] ">
              <div className="w-full h-full bg-[#08e1bd11] absolute inset-0 z-0 "></div>
              <div className="flex flex-col gap-5 text-center">
                <div className="">
                  <div className="h-1.5 w-full flex z-1 mb-2  ">
                    <span className="h-full w-[6%]   bg-[#f4796c]"></span>
                    <span className="h-full w-full  bg-[#f4796c] "></span>
                  </div>

                  <img
                    src="/src/assets/exploreright.webp"
                    className="grayscale-15  absolute w-[200px]  z-2 -top-[30%] right-[15%] "
                    alt=""
                  />
                </div>

                <div className="flex items-center justify-center gap-5 flex-col pt-18">
                  <h2 className="text-[24px] font-extrabold">Hi, I’m Jenny!</h2>
                  <p className="capitalize text-[16px] font-medium text-[#0000009e]">
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                  <div className="flex gap-4 z-20 ">
                    <a
                      href=""
                      className="p-4 rounded-full bg-[#f4796c] text-white cursor-pointer 
               hover:bg-[#173452] transition duration-300"
                    >
                      <FacebookIcon
                        className="fill-white"
                        strokeWidth={1}
                        size={17}
                      />
                    </a>

                    <a
                      href=""
                      className="p-4 rounded-full bg-[#f4796c] text-white cursor-pointer 
               hover:bg-[#173452] transition duration-300"
                    >
                      <TwitterIcon
                        className="fill-white"
                        strokeWidth={1}
                        size={17}
                      />
                    </a>

                    <a
                      href=""
                      className="p-4 rounded-full bg-[#f4796c] text-white cursor-pointer 
               hover:bg-[#173452] transition duration-300"
                    >
                      <InstagramIcon strokeWidth={3} size={17} />
                    </a>

                    <a
                      href=""
                      className="p-4 rounded-full bg-[#f4796c] text-white cursor-pointer 
               hover:bg-[#173452] transition duration-300"
                    >
                      <YoutubeIcon strokeWidth={3} size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-[#183354] text-[22px] font-bold mb-2">
                Subscribe & Followers
              </h2>
              <div className="h-1.5 w-full flex gap-2 mb-5   ">
                <span className="h-full w-[15%]  border- bg-[#f4796c]"></span>
                <span className="h-full w-[85%] border-[#1734523e] border-t border-b pb-1  "></span>
              </div>

              <div className="flex flex-col  gap-1 mb-30">
                <a
                  className="w-40 pl-4 items-center group flex gap-3  bg-[#e9f2f2] hover:bg-[#f4796c]  self-start  rounded-md py-2.5 transition duration-300"
                  href=""
                >
                  <FacebookIcon
                    className="text-[#183354]  fill-[#183354] group-hover:text-white transition duration-300 group-hover:fill-white"
                    strokeWidth={0.5}
                    size={20}
                  /><span className="font-semibold">Facebook</span>
                </a>

                <a
                  className="w-40 pl-4 group flex items-center gap-3  bg-[#e9f2f2] hover:bg-[#f4796c]  self-start  rounded-md py-2.5 transition duration-300"
                  href=""
                >
                  <TwitterIcon
                    className="text-[#183354] fill-[#183354] group-hover:text-white transition duration-300 group-hover:fill-white"
                    strokeWidth={0.5}
                    size={20}
                  /> <span className="font-semibold">Twitter</span>
                </a>

                <a
                  className="w-40 pl-4 group flex items-center gap-3 group  bg-[#e9f2f2] hover:bg-[#f4796c]  self-start  rounded-md py-2.5 transition duration-300"
                  href=""
                >
                  <InstagramIcon
                    className="text-[#183354]  group-hover:text-white transition duration-300 "
                    strokeWidth={2.5}
                    size={20}
                  /><span className="font-semibold">Instagram</span>
                </a>

                <a
                  className="w-40 pl-4 group flex items-center gap-3  group  bg-[#e9f2f2] hover:bg-[#f4796c]  self-start  rounded-md py-2.5 transition duration-300"
                  href=""
                >
                  <YoutubeIcon
                    className="text-[#183354]  group-hover:text-white transition duration-300 "
                    strokeWidth={2.5}
                    size={20}
                  /><span className="font-semibold">YouTube</span>
                </a>

                <a
                  className="w-40 pl-4 group flex items-center gap-3  group  bg-[#e9f2f2] hover:bg-[#f4796c]  self-start  rounded-md py-2.5 transition duration-300"
                  href=""
                >
                  <LinkedinIcon
                    className="text-[#183354] fill-[#183354] group-hover:text-white transition duration-300 group-hover:fill-white"
                    strokeWidth={0.5}
                    size={20}
                  /><span className="font-semibold">LinkedIn</span>
                </a>

                <a
                  className="w-40 pl-4 group flex items-center gap-3  group  bg-[#e9f2f2] hover:bg-[#f4796c]  self-start  rounded-md py-2.5 transition duration-300"
                  href=""
                >
                  <PiPinterestLogo
                    className="text-[#183354]  fill-[#183354] group-hover:text-white transition duration-300  group-hover:fill-white"
                    strokeWidth={1.5}
                    size={20}
                  /><span className="font-semibold">Pinterest</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
