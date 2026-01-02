import { Calendar, CircleUserRound } from "lucide-react";
import React from "react";

export default function Healthy() {
  const recipes = [
    {
      id: 1,
      foodTime: "Lunch",
      img: "src/assets/hr_post01.webp",
      header: "Comprehensive Checklist Running Workshop ",
      date: "october 10, 2025",
    },

    {
      id: 2,
      foodTime: "Breakfast",
      img: "src/assets/hr_post02.webp",
      header: "The Best Handoff Is No Handoff ",
      date: "october 21, 2025",
    },

    {
      id: 3,
      img: "src/assets/hr_post03.webp",
      foodTime: "Dessert ",
      header: "Internationalization With React Server",
      date: "November 03, 2025",
    },

    {
      id: 4,
      foodTime: "Pizza",
      img: "src/assets/hr_post04.webp",
      header: " What Leonardo Da Vinci Can Teach Us About Web Design",
      date: "November 15, 2025",
    },

    {
      id: 5,
      foodTime: "Dinner",
      img: "src/assets/hr_post05.webp",
      header: "Why You Should Consider Graphs For Your Next ",
      date: "November 27, 2025",
    },

    {
      id: 6,
      foodTime: "Appetizer",
      img: "src/assets/hr_post06.webp",
      header: "How To Create Dynamic Donut Charts With Tailwind ",
      date: "December 6, 2025",
    },
  ];

  const recipe2 = [
    {
      id: 1,
      foodTime: "Dessert",
      img: "src/assets/popular_post01.webp",
      header: "Inspiring Web Design And UX Showcases",
      date: "October 6, 2025",
    },

    {
      id: 2,
      foodTime: "Lunch",
      img: "src/assets/popular_post02.webp",
      header: "Inspiring Web Design And UX Showcases",
      date: "October 16, 2025",
    },

    {
      id: 3,
      foodTime: "Dinner",
      img: "src/assets/popular_post03.webp",
      header: "Inspiring Web Design And UX Showcases",
      date: "October 29, 2025",
    },

    {
      id: 4,
      foodTime: "Dessert",
      img: "src/assets/popular_post04.webp",
      header: "Inspiring Web Design And UX Showcases",
      date: "November 19, 2025",
    },

    {
      id: 5,
      foodTime: "Breakfast",
      img: "src/assets/popular_post05.webp",
      header: "Inspiring Web Design And UX Showcases",
      date: "December 6, 2025",
    },
  ];
  return (
    <>
      <div className="mt-2 min-h-[90vh] flex gap-9  w-full px-4 ">
        <div className="flex flex-[1.15] flex-col gap-5 h-full mb-10">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-start mb-2">
              <h2 className="font-bold text-[22px] text-black">
                Healthy Recipes
              </h2>
            </div>
            <div className="w-full flex items-center h-1.5 gap-3 ">
              <span className="w-[6%] h-full bg-[#f4796c]"></span>
              <span className="flex-1 h-full border-y border-[#1734523e]"></span>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-7">
            {recipes.map((items) => (
              <div key={items.id} className="flex flex-col  gap-5  ">
                <div className="w-60">
                  <div className="relative">
                    <div className="overflow-hidden rounded-md w-full min-h[280px]">
                      <img
                        className="w-full object-cover hover:scale-115 transition-transform duration-700 cursor-pointer"
                        src={items.img}
                        alt="Featured post"
                      />
                    </div>

                    <span className="text-white bg-[#f57769] px-4 py-1 hover:bg-[#1a3157] transition duration-500 rounded-md absolute -bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer">
                      {items.foodTime}
                    </span>
                  </div>

                  <div className="">
                    <h3
                      className="text-[19px] pt-1 font-semibold text-center mt-3  text-black cursor-pointer"
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

                    <ul className="flex items-center gap-2   text-black/50 font-semibold">
                      <li className="flex gap-1.5 text-[13px] items-center">
                        <CircleUserRound size={17} />
                        By
                        <a
                          href=""
                          className="hover:text-[#f57769] transition-colors"
                        >
                          Admin
                        </a>
                      </li>

                      <li className="flex gap-1.5 text-[13px] items-center">
                        <Calendar size={18} />
                        <span>{items.date}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[0.60] h-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 w-full">

            <div className="flex items-center justify-start mb-2">
              <h2 className="font-bold text-[22px] text-black">
                Popular Recipes
              </h2>
            </div>

            <div className="flex items-center w-full h-1.5 gap-3">
              <span className="w-[6%] h-full bg-[#f4796c]"></span>
              <span className="flex-1 h-full border-y border-[#1734523e]"></span>
            </div>
          </div>

          {recipe2.map((items) => 
          <div key={items.id} className="flex gap-5 items-center  w-full">

            <div className="w-[147px] relative overflow-hidden rounded-md">
              <img
                src={items.img}
                className="w-full h-full object-cover hover:scale-115 transition-transform duration-700 cursor-pointer"
                alt="RecipeImg"
              />
            </div>

            <div className="flex flex-col w-full">
              <span className="border px-5 py-0.5 rounded-md text-[13px] font-medium self-start hover:bg-[#f5796c] hover:text-white duration-500 cursor-pointer">
                {items.foodTime}
              </span>

              <h3
                className="md:text-[19px] text-[14px] font-bold text-black/80 text-left cursor-pointer"
                style={{
                  backgroundImage: "linear-gradient(to right, #fff, #000)",
                  backgroundSize: "0% 2px",
                  backgroundPosition: "left bottom",
                  backgroundRepeat: "no-repeat",
                  transition: "background-size 0.5s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundSize = "100% 2px")
                }
                onMouseLeave={(e) => (e.target.style.backgroundSize = "0% 2px")}
                > { items.header}</h3>

              <ul className="flex items-center gap-3 text-black/55 font-semibold text-[12px]">
                <li className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>03 December 2025</span>
                </li>
              </ul>
            </div>
            </div>
            )}
        </div>
      </div>
    </>
  );
}
