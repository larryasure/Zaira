import { Calendar, CircleUserRound } from "lucide-react";
import React, { } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Food() {

  const foodTime = [
    {
      id: 1,
      image: "/src/assets/featured_post01.webp",
      header: "How To make Cappuccino without Machine",
      badge: "Breakfast",
      date: "03 December, 2025",
    },

    {
      id: 2,
      image: "/src/assets/featured_post02.webp",
      header: "Favorite Browned Butter Chocolate Cookies",
      badge: "Dessert",
      date: "04 November, 2025",
    },

    {
      id: 3,
      image: "/src/assets/featured_post03.webp",
      header: "Announcing the spring Bucket",
      badge: "Breakfast",
      date: "28 November, 2025",
    },

    {
      id: 4,
      image: "/src/assets/featured_post04.webp",
      header: "Really Quick Broccoli Pasta Cheese Mikhail",
      badge: "Breakfast",
      date: "17 November, 2025",
    },

    {
      id: 5,
      image: "/src/assets/featured_post01.webp",
      header: "How To make Cappuccino without Machine",
      badge: "Breakfast",
      date: "23 October, 2025",
    },

    {
      id: 6,
      image: "/src/assets/featured_post02.webp",
      header: "How To make Cappuccino without Machine",
      badge: "Breakfast",
      date: "02 September, 2025",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        speed={2500}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        navigation
        className="overflow-hidden min-h-[60vh] w-full px-6 mb-7"
      >
        {foodTime.map((items) => (
          <SwiperSlide key={items.id} className="w-72 shrink-0 ">
            <div className="relative w-full ">
              <div className="overflow-hidden rounded-md min-h[280px]">
                <img
                  className="w-full object-cover hover:scale-115 transition-transform duration-700 cursor-pointer"
                  src={items.image}
                  alt="Featured post"
                />
              </div>

              <span className="text-white bg-[#f57769] px-4 py-1 hover:bg-[#1a3157] transition duration-500 rounded-md absolute -bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer">
                {items.badge}
              </span>
            </div>

            <div className="flex flex-col pt-4 px-0">
              <h3
                className="text-[22px] font-semibold text-center px-0 text-black pb-2 hover:bg-size[100%_2px] cursor-pointer hover:pb-2"
                style={{
                  backgroundImage: "linear-gradient(to right, #000, #fff)",
                  backgroundSize: "0% 2px",
                  backgroundPosition: "left bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "scroll",
                  transition: "background-size 0.5s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundSize = "100% 2px")
                }
                onMouseLeave={(e) => (e.target.style.backgroundSize = "0% 2px")}
              >
                {items.header}
              </h3>

              <ul className="flex items-center gap-6 mb-2  px-2 text-black/50 font-semibold mt-3">
                <li className="flex gap-1.5 text-[14px] items-center">
                  <CircleUserRound size={18} />
                  By
                  <a href="" className="hover:text-[#f57769] transition-colors">
                    Admin
                  </a>
                </li>

                <li className="flex gap-1.5 text-[14px] items-center">
                  <Calendar size={18} />
                  <span>{items.date}</span>
                </li>
              </ul>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
