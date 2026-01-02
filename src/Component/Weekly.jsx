import { motion } from "framer-motion";
import { header } from "framer-motion/client";
import { Calendar, CircleUserRound } from "lucide-react";
import React from "react";

export default function Weekly() {
  const recipes = [
    {
      id: 1,
      img: "/src/assets/rightrecipe_img02.webp",
      foodTime: "Lunch",
      header: "Exploring The Potential Of Web Workers For Multithreading",

    },

      {
      id: 2,
      img: "/src/assets/rightrecipe_img03.webp",
      foodTime: "Dessert",
      header: "Favorite Browned Butter Chocolate Cookies Daily Breakfast",

    },
      
        {
      id: 3,
      img: "/src/assets/rightrecipe_img04.webp",
      foodTime: "Appetizer",
      header: "The Potentially Dangerous Non Sibility Of Cookie Notices",

    },
  ]
  return (
    <div className="mt-15 h-screen px-4 ">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-[28px] text-black">
            Weekly Best Recipes
          </h2>
          <a
            className="px-8 py-1.5 font-semibold rounded-md cursor-pointer text-white bg-[#f4796c] transition-all duration-500 hover:bg-[#173452]"
            href=""
          >
            View All
          </a>
        </div>

        <div className="h-1.5 w-full flex gap-5">
          <span className="h-full w-[6%] bg-[#f4796c]"></span>
          <span className="h-full w-[94%] border-[#1734523e] border-t border-b pb-1"></span>
        </div>
        <div className="w-full flex gap-12 mt-4 mb-7 h-screen">
          <div className="w-[50%] rounded-md min-h-full relative flex flex-col justify-end pb-8 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 rounded-md bg-cover bg-center"
              style={{
                backgroundImage: "url('/src/assets/recipe_img01.webp')",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/90"></div>
            </motion.div>

            <div className="relative z-20 text-left text-white px-4">
              <div className="flex flex-col px-4 gap-2">
                <span className="bg-[#f5796c] px-6 font-medium rounded-md py-1 hover:bg-[#153455] duration-500 transition cursor-pointer self-start ">
                  Breakfast
                </span>
                <h3
                  className="text-[20px] font-semibold cursor-pointer "
                  style={{
                    backgroundImage: "linear-gradient(to right,black , white)",
                    backgroundSize: "0% 1px",
                    backgroundPosition: "left bottom",
                    backgroundRepeat: "no-repeat",
                    transition: "background-size 0.5s ease-in-out",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundSize = "100% 1px")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundSize = "0% 1px")
                  }
                >
                  How To Design An Effective User <br /> Onboarding Flow
                </h3>
              </div>

              <ul className="flex items-center z-20 gap-3 justify-start mt-2 text-white/80 font-semibold px-4 ">
                <li className="flex gap-1.5 text-[14px]  items-center">
                  <CircleUserRound size={18} />
                  By
                  <a className="hover:text-[#f57769] transition-colors" href="">
                    Admin
                  </a>
                </li>

                <li className="flex gap-1.5 text-[14px] items-center">
                  <Calendar size={18} />
                  <span>03 December 2025</span>
                </li>
              </ul>
            </div>
          </div>

          <div className=" w-[50%] ">
            <div className="flex flex-col gap-8.5 w-full">
            {recipes.map((items)  =>
            <div key={items.id} className=" ">
              <div className=" flex items-center ">
                <div className=" w-[300px]  relative overflow-hidden ">
                  <img
                    src={items.img}
                    className="w-full object-cover hover:scale-115 transition-transform duration-700 cursor-pointer rounded-md "
                    alt="RecipeImg"
                  />
                </div>

                <div className="relative  text-left text-white px-4">
                  <div className="flex flex-col px-4 gap-2">
                    <span className="bg-[#f5796c] px-6 font-medium rounded-md py-1 \ hover:bg-[#153455] duration-500 transition cursor-pointer self-start ">
                      {items.foodTime}
                    </span>
                    <h3
                      className="md:text-[20px] text-[14px] font-semibold text-black text-left relative cursor-pointer"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #fff, #000)", 
                        backgroundSize: "0% 2px",
                        backgroundPosition: "left bottom",
                        backgroundRepeat: "no-repeat",
                        transition: "background-size 0.5s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundSize = "100% 2px")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundSize = "0% 2px")
                      }
                    >
                     {items.header}
                    </h3>
                  </div>

                  <ul className="flex items-center  gap-3 justify-start mt-2  text-black/65 font-semibold px-4 ">
                    <li className="flex gap-1.5 text-[14px]  items-center">
                      <CircleUserRound size={18} />
                      By
                      <a
                        className="hover:text-[#f57769] transition-colors"
                        href=""
                      >
                        Admin
                      </a>
                    </li>

                    <li className="flex gap-1.5 text-[14px] items-center">
                      <Calendar size={18} />
                      <span>03 December 2025</span>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
              )}
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}
