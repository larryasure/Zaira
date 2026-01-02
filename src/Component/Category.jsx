import React from "react";

export default function Category() {
  const foodCategories = [
    {
      id: 1,
      img: "/src/assets/categories_img01.webp",
      spanT: "Breakfast",
    },

    {
      id: 2,
      img: "/src/assets/categories_img02.webp",
      spanT: "Dessert",
    },

    {
      id: 3,
      img: "/src/assets/categories_img03.webp",
      spanT: "Lunch",
    },

    {
      id: 4,
      img: "/src/assets/categories_img04.webp",
      spanT: "Appetizer",
    },

    {
      id: 5,
      img: "/src/assets/categories_img05.webp",
      spanT: "Dinner",
    },

    {
      id: 6,
      img: "/src/assets/categories_img06.webp",
      spanT: "Pizza",
    },
  ];
  return (
    <>
      <div
        className="bg-[url('/src/assets/category.webp')] bg-fit bg-no-repeat  min-h-[70vh] mb-3 w-full 
                relative flex items-center justify-center gap-8   flex-col  px-3"
      >
        <div className="absolute inset-0 bg-[#0453612c]"></div>
        <div className="flex flex-col gap-0.5 text-center mt-6.5">
          <h2 className="font-bold text-[28px] text-[#0d396e]">
            Our Top Categories
          </h2>
          <div className="px-58">
            <p className=" bg-[#f4796c]"></p>
            <p className=" pt-2 bg-[#f4796c] "></p>
          </div>
          <p className="font-medium text-[16px] leading-relaxed text-[#3f4040]  ">
            Browned butter and brown sugar caramelly goodness, crispy edges
            <br /> thick and soft centers and melty little puddles
          </p>
        </div>
        <div className="flex gap-4 ">
          {foodCategories.map((items) => (
            <div key={items.id} className="z-10 cursor-pointer ">
              <div className="group relative border-6 border-white rounded-full overflow-hidden">
                <img src={items.img} className="w-[200px] object-cover " />
                <div className="absolute inset-0 rounded-full bg-[#070707ac] scale-0 transition-all duration-900 ease-out group-hover:scale-100"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white bg-[#f5796c] font-bold text-[14px] uppercase px-2.5 py-1 tracking-wider rounded-md z-10">
                    {items.spanT}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
