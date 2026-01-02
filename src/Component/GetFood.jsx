export default function GetFood() {
  return (
    <>
      <div className="bg-[url(src/assets/newsletter_shape02.webp)] h-60  my-9  w-full relative  flex gap-9 items-center justify-center  ">
        <div className="w-full h-full bg-[#08e1bd11] absolute inset-0 z-0 "></div>

        <h2 className="text-[#173356] text-2xl font-bold ">Want to Get New <br /> Food New Daily?</h2>

        <form className="flex gap-3 items-center z-10">
          <input
            type="text"
            placeholder="Name"
            className=" w-65 h-12 px-3 rounded-md bg-white shadow-sm border border-transparent focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-black/70 placeholder:font-semibold"
          />

          <input
            type="text"
            placeholder="E-mail"
            className="w-65 h-12 px-3 rounded-md bg-white shadow-sm border border-transparent focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-black/70 placeholder:font-semibold"
          />

          <button className=" px-5 py-3 font-semibold rounded-md cursor-pointer text-white  bg-[#f4796c] transition-all duration-500 hover:bg-[#173452] ">
            Submit Now
          
          </button>
        </form>
      </div>
    </>
  );
}
