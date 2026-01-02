import React from "react";

export default function Footer() {
  return (
    <>
      <div className="min-h-[90vh] flex justify-around px-4 bg-[#0c1622] text-[#bacce1] mt-10 py-20 text-left border-b">
        <div className="flex flex-col gap-6 max-w-[250px]">
          <img src="/src/assets/w_logo.webp" alt="logoimg" />

          <span>
            Browned butter and brown sugar caramelly goodness, crispy edges,
            thick and soft centers and melty little puddles of chocolate.
          </span>
        </div>

        {[
          {
            title: "Company",
            items: [
              "About Us",
              "The Test Kitchen",
              "Podcast",
              "Events",
              "Jobs",
            ],
          },
          {
            title: "Get Help",
            items: [
              "Contact & Faq",
              "Orders & Returns",
              "Gift Cards",
              "Register",
              "Catalog",
            ],
          },
          {
            title: "Explore",
            items: [
              "The Shop",
              "The Test Kitchen",
              "Podcast",
              "Events",
              "Jobs",
            ],
          },
          {
            title: "Company",
            items: ["The Shop", "Recipes", "Food", "Travel", "Hotline"],
          },
          {
            title: "Follow Us On",
            items: ["Facebook", "Twitter", "Instagram", "YouTube", "Pinterest"],
          },
        ].map((col, i) => (
          <div key={i} className="flex flex-col gap-6">
            <h4 className="text-[18px] font-semibold">{col.title}</h4>

            <div className="h-1.5 w-full flex items-center gap-3">
              <span className="w-[20%] text-center h-full bg-[#f5796c]"></span>
            </div>

            <ul className="flex flex-col gap-3 mt-1">
              {col.items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative inline-block pb-0.5
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-0 after:h-0.5 after:bg-[#fff]
                after:transition-all after:duration-500
                hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-[#ffffff33] py-10 px-4 flex items-center justify-between bg-[#0c1622] text-[#bacce1]  text-sm">
        <div className="flex gap-6">
          <a href="#" className="relative inline-block pb-0.5
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-0 after:h-0.5 after:bg-[#fff]
                after:transition-all after:duration-500
                hover:after:w-full">
            Privacy Policy & Terms
          </a>

          <a href="#" className="relative inline-block pb-0.5
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-0 after:h-0.5 after:bg-[#fff]
                after:transition-all after:duration-500
                hover:after:w-full ">
            Site Credits
          </a>
        </div>
        <span className=" ">© 2024 All Rights Reserved</span>
      </div>
    </>
  );
}
