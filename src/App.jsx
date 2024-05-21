import { useState } from "react";
import "./App.css";
import FoodCarousel from "./components/FoodCarousel";

function App() {
  const [foodTab, setFoodTab] = useState("Food");

  const weekday = [
    {
      day: "Sunday",
    },
    {
      day: "Monday",
      openHours: "10.00 AM - 10.00 PM",
    },
    {
      day: "Tuesday",
      openHours: "10.00 AM - 10.00 PM",
    },
    {
      day: "Wednesday",
      openHours: "10.00 AM - 10.00 PM",
    },
    {
      day: "Thursday",
      openHours: "10.00 AM - 10.00 PM",
    },
    {
      day: "Friday",
      openHours: "10.00 AM - 10.00 PM",
    },
    {
      day: "Saturday",
      openHours: "10.00 AM - 10.00 PM",
    },
  ];
  const currentDay = weekday[new Date().getDay()];
  const currentHours = new Date().getHours();
  const isRestaurantClosed =
    currentDay.day === "Sunday" || currentHours < 10 || currentHours >= 22;
  const [openSchedule, setOpenSchedule] = useState(false);

  const onScheduleClick = () => {
    setOpenSchedule(!openSchedule);
  };

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-roboto w-full">
      <nav className="w-full flex gap-8 h-20 fixed top-0 left-0 bg-transparent z-50">
        <div className="w-full max-w-8xl mx-auto flex items-center">
          <p className="w-64 font-bold text-xl">Logo</p>
          <div className="flex-1 flex gap-4">
            <p
              className="cursor-pointer hover:underline"
              onClick={() => scrollTo("home")}
            >
              Home
            </p>
            <p
              className="cursor-pointer hover:underline"
              onClick={() => scrollTo("home")}
            >
              Menu
            </p>
            <p
              className="cursor-pointer hover:underline"
              onClick={() => scrollTo("home")}
            >
              Location
            </p>
            <p
              className="cursor-pointer hover:underline"
              onClick={() => scrollTo("home")}
            >
              Contact
            </p>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div
        id="home"
        className="w-full h-screen text-black flex items-center font-inter mx-auto relative overflow-hidden"
      >
        <div className="flex flex-col items-start max-w-8xl mx-auto w-full">
          <div className="flex gap-6 items-center">
            <p className="text-2xl text-[#195A00] font-miniver">
              Fresh & Tasty Food
            </p>
            <div className="w-8 border-b border-b-[#195A00]">
              {/* <p>dawd</p> */}
            </div>
          </div>
          <div className="text-7xl space-y-3 mt-3 font-akaya">
            <p>Penyetan Mas Kholis</p>
            <p>Rasanya Mantap Habis!</p>
          </div>
        </div>
        <div className="absolute top-0 -right-32">
          <img src="/banner-image.png" className="h-screen" />
        </div>
      </div>

      {/* Profile */}
      <div
        id="why-us"
        className="w-full h-screen text-black flex items-center font-inter mx-auto relative overflow-hidden bg-[#FAF7F2]"
      >
        <div className="flex flex-row items-center justify-between max-w-8xl mx-auto w-full h-full gap-12">
          <img src="/why-us.png" />
          <div className="flex flex-col justify-center items-start">
            <p className="text-2xl text-[#195A00] font-miniver">
              Why Choose Us?
              <span className="ml-2 w-12 h-8 border-b border-b-[#195A00] inline-block"></span>
            </p>
            <div className="space-y-3 mt-3">
              <p className="text-5xl font-roboto font-semibold leading-tight">
                Kenapa Harus Penyetan Mas Kholis?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic a
                in, earum dignissimos esse corporis? Nisi nemo praesentium
                necessitatibus, hic quis magnam quo delectus eligendi veniam
                molestias, earum soluta similique temporibus. Soluta,
                repellendus. Odio, reprehenderit eveniet facere, perspiciatis
                quam obcaecati voluptas eligendi recusandae beatae itaque nemo
                nostrum iusto. Laboriosam, nemo!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur nam dolore unde ad iure. Quaerat molestiae perspiciatis
                quia nesciunt at?
              </p>
              <div className="flex flex-col gap-2 justify-center items-center bg-white p-2 relative">
                <p className="text-xl font-semibold">
                  {currentDay.day} {currentDay.openHours}
                </p>
                <p
                  className={`
                    ${
                      currentDay.day === "Sunday" || isRestaurantClosed
                        ? "text-red-500"
                        : "text-green-500"
                    } font-bold text-xl`}
                >
                  {currentDay.day === "Sunday" || isRestaurantClosed
                    ? "We're Closed!"
                    : "We're Open!"}
                </p>
                <div
                  className="absolute right-4 cursor-pointer"
                  onClick={onScheduleClick}
                >
                  <img src="/down-arrow.png" className="w-6" />
                </div>
                {openSchedule && (
                  <div className="absolute top-20 right-0 w-full bg-white p-4">
                    {weekday.map((day, index) => (
                      <div key={index} className="flex justify-between">
                        <p>{day.day}</p>
                        <p>{day.openHours || "Closed"}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        id="menu"
        className="w-full h-screen text-black flex items-center font-inter mx-auto relative overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center max-w-8xl mx-auto w-full h-full gap-8">
          <div className="w-full">
            <p className="text-center text-5xl font-bold">Our Food Menu</p>
            <p className="text-center text-lg">
              Kami menyediakan makanan paling menarik dan enak yang akan kalian
              rasakan!
            </p>
          </div>
          {/* Section Tab */}
          <div className="w-full">
            <div className="flex justify-center space-x-4">
              {["Food", "Dessert", "Snack"].map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer py-4 px-6 ${
                    foodTab === tab
                      ? "border-b-2 border-b-[#195A00] text-[#195A00]"
                      : "text-black"
                  }`}
                  onClick={() => setFoodTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            
            <FoodCarousel/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
