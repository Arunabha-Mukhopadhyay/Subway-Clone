import back from "../assets/back.webp";
import text from "../assets/text.webp";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex flex-shrink-0 inset-y-0">
      <img
        className="h-screen w-full object-cover top-0 left-0 right-0 bottom-0 p-0 fixed z-20 sm:bg-local"
        src={back}
        alt=""
      />
      <div className="absolute left-6 flex flex-col z-20 justify-center items-start">
        <img
          className="lg:w-80 lg:h-80 sm:w-64 sm:h-64 mb-4 animate-slide-in"
          src={text}
          alt=""
        />
        <ul className="flex flex-col gap-6 mt-11 animate-slide-in">
          <li>
            <h1 className="text-white text-xl font-semibold">Order Now On</h1>
          </li>
          <li>
            <button className="bg-orange-500 font-bold text-white px-8 py-2 rounded-full hover:bg-orange-600">
              SWIGGY
            </button>
          </li>
          <li>
            <button className="bg-red-600 font-bold italic text-white px-8 py-2 rounded-full hover:bg-red-700">
              ZOMATO
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
